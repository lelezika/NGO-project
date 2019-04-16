import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Event } from './event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = '/assets/mock-events.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url)
      .pipe(
        catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
