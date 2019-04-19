import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Event } from './event';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [];
  private eventurl = '/assets/mock-events.json';
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventurl)
      .pipe(
        catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  getEventList(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:4000/api/events')
  }

  getOneEvent(id: number): Observable<Event> {
    const params = new HttpParams({
      fromString: 'id=' + id
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.http.get<Event>(this.eventurl, findhttpOptions)
      .pipe(catchError(this.handleError<Event>('getOneEvent id' + id)));
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>('http://localhost:4000/api/events', event, this.httpOptions)
      .pipe(catchError(this.handleError<Event>('addEvent')));
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.eventurl, event, this.httpOptions)
      .pipe(catchError(this.handleError('updateEvent id=' + event.id)));
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

