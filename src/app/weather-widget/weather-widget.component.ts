import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.less']
})
export class WeatherWidgetComponent implements OnInit {
  weatherInfo: Object = {};
  time: String = '-';

  constructor(private weatherService: WeatherService) { }

  /**
   * Loads weather information and creates a timer to update current time.
   *
   *
   * @memberOf WeatherWidgetComponent
   */
  ngOnInit() {
    this.loadWeather();
    this.createTimeInterval();
    this.createWeatherObserver();
  }

  /**
   * Creates weather observer.
   *
   * @private
   *
   * @memberOf WeatherWidgetComponent
   */
  private createWeatherObserver() {
    this.weatherService.addObserver(this.loadWeather.bind(this));
  }

  /**
   * Loads into scope weather information from weather service.
   *
   * @private
   *
   * @memberOf WeatherWidgetComponent
   */
  private loadWeather() {
    let weather = this.weatherService.get();

    if (weather) {
      this.weatherInfo = weather;
    }
  }

  /**
   * Creates a time interval to update time every second.
   *
   * @private
   *
   * @memberOf WeatherWidgetComponent
   */
  private createTimeInterval() {
    setInterval(time => {
      this.time = new Date().toLocaleString('en-US', {
        hour12: false
      }).split(',')[1].trim();
    }, 1000);
  }
}
