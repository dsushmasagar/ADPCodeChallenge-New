import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'weather', component: CurrentWeatherComponent },
  { path: 'forecast', component: FiveDayWeatherComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
