import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  title:string = "7 day daily forecast";
  currentWeatherReport:{};
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    this.getSevenDayForecast(this.weatherService.zipCode);
    this.weatherService.zipCodeChanges$.subscribe(
      changedZipCode => {
        this.getSevenDayForecast(changedZipCode);
      }
    );
  }
  
  getSevenDayForecast(zipCode): void {
    this.weatherService.getSevenDayForecast(zipCode)
    .subscribe((report) => {
      this.currentWeatherReport = report;
    });
  }

}
