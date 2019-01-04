import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
import { FormComponent } from './form/form.component';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: TodayWeatherComponent },
  { path: 'forecast', component: FiveDayWeatherComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
