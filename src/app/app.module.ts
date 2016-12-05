import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { LocationComponent } from './location/location.component';

import { WeatherService } from './weather.service';
import { GoogleMapsService } from './google-maps.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    LocationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    GoogleMapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
