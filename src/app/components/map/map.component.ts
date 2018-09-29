import { Component, OnInit } from '@angular/core';
import { tileLayer,latLng, Layer } from 'leaflet';

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
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  options = {
    layers: [
      osmLayer
    ],
    zoom: 8,
    center: latLng(40.3049501, -3.7694213,13)
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': osmLayer,
      'PNOA' : pnoaWMS
    },
    overlays: {
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
