import { Injectable, EventEmitter } from '@angular/core';
import { WeatherModelService } from './weather-model.service';
import weather from 'yahoo-weather';

@Injectable()
export class WeatherService {
  private weatherInformation: WeatherModelService;
  private observers: Array<Function> = [];

  weatherUpdatedEvent = new EventEmitter();

  /**
   * Updates location and sends an event if everything goes ok. Promise is
   * resolved when finished.
   *
   * @param {any} location
   * @returns {Promise<WeatherModelService>}
   *
   * @memberOf WeatherService
   */
  updateLocation(location): Promise<WeatherModelService> {
    return weather(location)
      .then(info => new WeatherModelService(info))
      .then(weather => {
        this.weatherInformation = weather;

        if (weather) {
          this.callObservers();

          return Promise.resolve();
        } else {
          return Promise.reject('Error! Location incorrect.');
        }
      });
  }

  /**
   * Obtains weather information requesting it to an internet service.
   *
   * @returns {WeatherModelService} Weather information.
   *
   * @memberOf WeatherService
   */
  get(): WeatherModelService {
    return this.weatherInformation;
  }

  callObservers(): void {
    this.observers.forEach(observer => observer(this));
  }

  addObserver(callback): void {
    this.observers.push(callback);
  }
}
