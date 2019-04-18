import { Component } from '@angular/core';
import { GeoJSON } from 'leaflet';
import { GeoJsonService } from './services/geo-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpxLoader';
  geoJson:GeoJSON;
  public file:File;

  constructor(private geoJsonService: GeoJsonService){ }

  onFileInput(event){
    let reader = new FileReader();
    
    if(event.target.files 
      && event.target.files.length) {
        this.file = event.target.files[0];
        reader.readAsDataURL(this.file);     
        
        reader.onload = () => {
          this.geoJsonService.setData(reader.result);
        };
    }
    
    this.geoJson = new GeoJSON(this.geoJsonService.loadData());
    console.log(this.geoJson);
  }
}
