import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = '/assets/film.json';
  private movieDetail: any;

  // private handleError: HandleError;
  constructor(private http: HttpClient) {}

  // get Movie json data using observable
  getMovie(): Observable<any> {
    return this.http.get(this.movieUrl).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  setMovieDetail(movie) {
    this.movieDetail = movie;
  }

  getMovieDetail(): any {
    return this.movieDetail;
  }

  // handling error
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
