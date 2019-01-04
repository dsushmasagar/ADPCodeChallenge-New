import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {

  title:string = "5 day daily forecast";
  todayWeatherReport:{};
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.getTodayWeatherForecast(this.weatherService.zipCode);
    
    this.weatherService.zipCodeChanges$.subscribe(
      changedZipCode => {
        this.getTodayWeatherForecast(changedZipCode);
      }
    );
  }
  
  getTodayWeatherForecast(zipCode): void {
    this.weatherService.getTodayWeatherForecast(zipCode)
    .subscribe((report) => {
      this.todayWeatherReport = report;
    });
  }

}
