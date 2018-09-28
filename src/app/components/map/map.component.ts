import { Component, OnInit } from '@angular/core';
import { tileLayer,latLng, Layer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  osmLayer:Layer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
                  {  
                    maxZoom: 18, 
                    attribution: '...' 
                  });
  options = {
    layers: [
      this.osmLayer
    ],
    zoom: 10,
    center: latLng(40.3049501, -3.7694213,13)
  };
  layersControl = {
    baseLayers: {
      'Open Street Map': this.osmLayer
      
    },
    overlays: {
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
