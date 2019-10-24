import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planetUrl = '/assets/planets.json';
  private planetDetail: any;

  // private handleError: HandleError;
  constructor(private http: HttpClient) {}

  // get planet json data using observable
  getPlanet(): Observable<any> {
    return this.http.get(this.planetUrl).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  setPlanetDetail(planet) {
    this.planetDetail = planet;
  }

  getPlanetDetail(): any {
    return this.planetDetail;
  }

  // handling error
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
