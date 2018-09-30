import { Component, OnInit } from '@angular/core';
import { GeoJsonService } from '../../services/geo-json.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  _file:File;
  _geoJson:string;
  constructor( private _geoJsonService:GeoJsonService) {

   }

  ngOnInit() {
  }

  onFileInput(event){
    let reader = new FileReader();
    
    if(event.target.files 
      && event.target.files.length) {
        this._file =event.target.files[0];
        reader.readAsDataURL(this._file);        
        //reader.readAsText(this._file);

        reader.onload = () => {
            this._geoJsonService.setData(reader.result);
        };
    }
  }

}
