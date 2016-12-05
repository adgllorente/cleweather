import { Injectable } from '@angular/core';
import * as MapsApi from 'google-maps-api';

const MAPS_KEY: string = 'AIzaSyBIH3QJQecq3x4WA7JsIxgTsrYJJsDQcMI';

@Injectable()
export class GoogleMapsService {

  constructor() {}

  /**
   * Loads google maps API with places library.
   *
   * @return {Promise<any>} To be resolved with Google Maps methods.
   *
   * @memberOf GoogleMapsService
   */
  load(): Promise<any> {
    return MapsApi(MAPS_KEY, ['places'])();
  }
}
