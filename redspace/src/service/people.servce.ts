import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleUrl = '/assets/people.json';
  private peopleDetail: any;

  // private handleError: HandleError;
  constructor(private http: HttpClient) {}

  // get people json data using observable
  getPeople(): Observable<any> {
    return this.http.get(this.peopleUrl).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  setPeopleDetail(people) {
    this.peopleDetail = people;
  }

  getPeopleDetail(): any {
    return this.peopleDetail;
  }

  // handling error
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
