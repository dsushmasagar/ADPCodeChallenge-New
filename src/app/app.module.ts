import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertTimePipe } from './shared/convert-time.pipe';
import { FormComponent } from './form/form.component';
import { HumidityFilterPipe } from './shared/humidity-filter.pipe';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayWeatherComponent,
    FiveDayWeatherComponent,
    HomeComponent,
    ConvertTimePipe,
    FormComponent,
    HumidityFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
