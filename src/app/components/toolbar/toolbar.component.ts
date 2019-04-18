import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { GeoJSON } from 'leaflet';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  {
  
  
  @Input("file") file:File;
  @Output("onLoad") onLoad = new EventEmitter<any>();

  constructor() { 
    console.log(this.file);
   }

  
  onFileInput(event){
    this.onLoad.emit(event);
  }

}
