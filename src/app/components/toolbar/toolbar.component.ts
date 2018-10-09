import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { GeoJSON } from 'leaflet';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  {
  public file:File;
  public geoJson:string;

  @Output() onLoad = new EventEmitter<any>();

  constructor() {  }

  
  onFileInput(event){
    this.onLoad.emit(event);
  }

}
