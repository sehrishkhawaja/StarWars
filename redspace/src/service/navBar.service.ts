import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public name: Subject<string> = new Subject();
  constructor() {}

  broadcastLoginChange(text: string) {
    this.name.next(text);
  }
}
