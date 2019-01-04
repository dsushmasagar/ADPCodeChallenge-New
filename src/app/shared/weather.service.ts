import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  appid:string = "APPID=60d999b08ecb342174e5027021f674fb";
  zipCode:string = "30040";

  private enteredZipCode = new Subject<string | null>();
  zipCodeChanges$ = this.enteredZipCode.asObservable();

  changeZipCode(zipCode:string | null): void {
    this.zipCode = zipCode;
    this.enteredZipCode.next(zipCode);
  }

  getFiveDayForecast(zipCode): Observable<{}> {
    console.log(zipCode, this.appid);
    return this.http.get<{}>(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&${this.appid}`)
    .pipe(
      tap(data => console.log('data', data)),
      catchError(this.handleError('data', {}))
    );
  }

  getSevenDayForecast(zipCode): Observable<{}> {
    return this.http.get<{}>(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&${this.appid}`)
    .pipe(
      tap(data => console.log('data', data)),
      catchError(this.handleError('data', {}))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error, "ram maradolla"); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
