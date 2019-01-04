import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FiveDayWeatherComponent } from './five-day-weather/five-day-weather.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertTimePipe } from './shared/convert-time.pipe';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    FiveDayWeatherComponent,
    LandingPageComponent,
    ConvertTimePipe,
    FormComponent
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
