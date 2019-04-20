import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Event } from './event';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [];
  //  private url = '/assets/mock-events.json';
  private url = 'http://localhost:4000/api/events';
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getEventList(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url)
      .pipe(
        map((events: any[]) => {
          for (event of events) {
            event.id = event._id;
            delete event._id;
          }
          return events;
        }),
        catchError(this.handleError<Event[]>('getEventList', []))
      );
  }

  getOneEvent(id: string): Observable<Event> {
    return this.http.get<Event[]>(this.url)
      .pipe(
        map(events => {
          const matches = [];
          for (event of events) {
            if (event._id === id) {
              event.id = event._id;
              delete event._id;
              matches.push(event);
            }
          }
          return matches[0];
        }),
        catchError(this.handleError<Event[]>('getEventList', null))
      );
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.url, event, this.httpOptions)
      .pipe(
        catchError(this.handleError<Event>('addEvent', undefined))
      );
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.url+"/"+event.id, event, this.httpOptions)
      .pipe(catchError(this.handleError('updateEvent', event)));
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  setModuleHeader(value){
    this.headerSource.next(value);
  }

}

