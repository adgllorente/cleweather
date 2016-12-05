/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherModelService } from './weather-model.service';

describe('WeatherModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherModelService]
    });
  });

  it('should ...', inject([WeatherModelService], (service: WeatherModelService) => {
    expect(service).toBeTruthy();
  }));
});
