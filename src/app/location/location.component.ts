import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { GoogleMapsService } from '../google-maps.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit {
  private location;
  private map;

  constructor(
    private weatherService: WeatherService,
    private googleMapsService: GoogleMapsService
  ) { }

  ngOnInit() {
    this.createInput();
    this.createMap();
  }

  private createInput() {
    let fieldElement = document.getElementById('cleweather-location--field');

    this.googleMapsService.load().then(maps => {
      this.location = new maps.places.Autocomplete(fieldElement, {
        types: ['geocode']
      });

      maps.event.addListener(this.location, 'place_changed',
        this.onLocationChange.bind(this));
    });
  }

  /**
   * Creates map.
   *
   * @private
   *
   * @memberOf LocationComponent
   */
  private createMap() {
    // Creating the map
    this.googleMapsService.load().then(maps => {
      let mapElement = document.getElementById('cleweather--map');

      this.map = new maps.Map(mapElement, {
        zoom: 14,
        center: new maps.LatLng('41.6496721', '-0.8910256'),
        mapTypeId: maps.MapTypeId.HYBRID,
        disableDefaultUI: true
      });
    });
  }

  /**
   * Updates location in weather service when form is submitted.
   *
   * @private
   *
   * @param {*} form
   * @memberOf LocationComponent
   */
  private onLocationChange(form: any) {
    var place = this.location.getPlace();

    // Creating the map
    this.map.setCenter(place.geometry.location);
    this.map.setZoom(14);

    // Updates location in weather service.
    this.weatherService.updateLocation(place.formatted_address);
  }
}
