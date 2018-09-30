import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,MatIconModule,MatButtonModule } from '@angular/material';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';

/*Services*/
import { GeoJsonService } from './services/geo-json.service';

/*Components*/
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LeafletModule.forRoot(),
    MatButtonModule
  ],
  providers: [
    GeoJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
