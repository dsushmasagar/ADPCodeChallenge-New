import { Component } from '@angular/core';
import { WeatherService } from './shared/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ADP-CodeChallenge';
  constructor(private weatherService: WeatherService) { };
  zipCode:string;
 
  fiveDayreport:{};  
  ngOnInit() {
    this.zipCode = this.weatherService.zipCode;
    this.weatherService.zipCodeChanges$.subscribe(
      changedZipCode => {
        this.zipCode = changedZipCode;
      }
    );
  }

  updateZip($event) {
    if($event.length == 5 && this.zipCode != $event) {
        this.zipCode = $event;
        this.weatherService.changeZipCode(this.zipCode);
    }
  }
}
