import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  fileInput:string = "";

  constructor() { }

  ngOnInit() {
  }

  onFileInput($event){
    console.log(this.fileInput);
  }

}
