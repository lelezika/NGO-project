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
        catchError(this.handleError<Event[]>('getEventList', []))
      );
  }

  getOneEvent(id: string): Observable<Event> {
    const params = new HttpParams({
      fromString: 'id=' + id
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.http.get<Event>(this.url, findhttpOptions)
      .pipe(
        catchError(this.handleError<Event>('getOneEvent', null))
      );
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.url, event, this.httpOptions)
      .pipe(
        catchError(this.handleError<Event>('addEvent', undefined))
      );
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.url, event, this.httpOptions)
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

