import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GeoJsonService {
  
  geoJson:object;

  constructor(private http:HttpClient) {
    this.loadData();    
  }

  public setData(url:any){    
    this.http.get(url).subscribe(
      res => {
        this.geoJson = res;
        localStorage.setItem( "geoJson", JSON.stringify(this.geoJson));
      });
  }

  public getGeoJson(){
  }


  loadData(){
    if(localStorage.getItem("geoJson")){
      return JSON.parse(localStorage.getItem("geoJson"));
    }
  }

}
