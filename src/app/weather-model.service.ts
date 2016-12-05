import { Injectable } from '@angular/core';

const RAINY_CODES: Array<number> = [1, 3, 4, 10, 11, 12, 35, 37, 38, 39, 40,
    45, 47],
  SUNNY_CODES: Array<number> = [31, 33, 34, 36],
  WINDY_CODES: Array<number> = [0, 2, 23, 24],
  CLOUDY_CODES: Array<number> = [25, 26, 27, 28, 29, 30, 44],
  SNOWING_CODES: Array<number> = [5, 6, 7, 8, 9, 13, 14, 15, 16, 17, 18, 41,
    42, 43, 46],
  FOGGY_CODES: Array<number> = [19, 20, 21, 22];

@Injectable()
export class WeatherModelService {
  public temperature: string;
  public temperatureMin: string;
  public temperatureMax: string;
  public windSpeed: string;
  public windDirection: string;
  public humidity: string;
  public isRaining: boolean;
  public isSunny: boolean;
  public isWindy: boolean;
  public isCloudy: boolean;
  public isSnowing: boolean;
  public isFoggy: boolean;
  public moreInfo: string;
  public locationName: string;

  constructor(info) {
    let forecast = info.item.forecast[0],
      code = parseInt(info.item.condition.code);

    this.temperature =  `${info.item.condition.temp}º${info.units.temperature}`;
    this.temperatureMin =  `${forecast.low}º${info.units.temperature}`;
    this.temperatureMax =  `${forecast.high}º${info.units.temperature}`;
    this.windSpeed =  `${info.wind.speed}${info.units.speed}`;
    this.windDirection =  this.toWindDirection(parseInt(info.wind.direction));
    this.humidity =  info.atmosphere.humidity;
    this.moreInfo = info.link;
    this.locationName = `${info.location.city}, ${info.location.region} - ${info.location.country}`
    this.isRaining =  RAINY_CODES.indexOf(code) >= 0;;
    this.isSunny =  SUNNY_CODES.indexOf(code) >= 0;
    this.isWindy =  WINDY_CODES.indexOf(code) >= 0;
    this.isCloudy =  CLOUDY_CODES.indexOf(code) >= 0;
    this.isSnowing =  SNOWING_CODES.indexOf(code) >= 0;
    this.isFoggy =  FOGGY_CODES.indexOf(code) >= 0;
  }

  /**
   * Calculates wind direction for a given degree.
   *
   * @private
   * @param {number} degrees
   * @returns {string} N, E, S, W depending on the wind.
   *
   * @memberOf WeatherService
   */
  private toWindDirection(degrees: number) {
    if (degrees > 315 || degrees <= 45) {
      return 'N';
    }

    if (degrees > 45 && degrees <= 135) {
      return 'E';
    }

    if (degrees > 135 && degrees <= 225) {
      return 'S';
    }

    if (degrees > 225 && degrees <= 315) {
      return 'S';
    }
  }
}
