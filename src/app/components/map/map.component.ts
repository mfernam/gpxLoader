import { Component, OnInit, OnDestroy } from '@angular/core';
import { LatLngBounds,latLngBounds,tileLayer,Layer,latLng,LatLng,GeoJSON,FeatureGroup } from 'leaflet';

import { GeoJsonService } from '../../services/geo-json.service';

const osmLayer:Layer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
                  {  
                    maxZoom: 18, 
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                  });
  const pnoaWMS = tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&', {
    layers:  "OI.OrthoimageCoverage",
    format: 'image/jpeg',
    detectRetina: true,
    attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
  }); 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GeoJsonService]
})
export class MapComponent implements OnInit, OnDestroy {  
  map:any;
  geoJson:GeoJSON;
  geoJsonLayer:FeatureGroup<Layer> = new FeatureGroup();

  
  _center:LatLng = latLng([ 38.351905, -0.486855 ]);// L.latLng(40.3049501, -3.7694213,13);
  _bounds:LatLngBounds = latLngBounds ([38.470256117005015, -0.3264999389648438],[ 38.26972361264482,  -0.6437301635742189]);

  options = {
    layers: [ osmLayer,this.geoJsonLayer ],
    center: this._center,
    bounds : this._bounds
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': osmLayer,
      'PNOA' : pnoaWMS
    },
    overlays: {
      'geojson':this.geoJsonLayer
    }
  }

  geoJsonStyle:any = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
   };

  constructor( private _geoJsonService:GeoJsonService ) {
    this.geoJson = new GeoJSON(this._geoJsonService.loadData());
   }

  ngOnInit() {
    this.geoJson = new GeoJSON(this._geoJsonService.loadData()).setStyle(this.geoJsonStyle);
  }
  ngOnDestroy() {
    this.map.remove();
  }
  onMapReady(map: L.Map) {
    this.map = map;
    this.geoJson = new GeoJSON(this._geoJsonService.loadData());
    if(this.geoJson["_layers"]){ 
      this.geoJsonLayer.addLayer(this.geoJson).addTo(this.map);
      this._center = this.geoJsonLayer.getBounds().getCenter();
      this._bounds = this.geoJsonLayer.getBounds();
    }
 }
 
 
}