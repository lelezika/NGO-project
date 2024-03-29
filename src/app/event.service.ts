import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { NgoEvent } from './event';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: NgoEvent[] = [];
  //  private url = '/assets/mock-events.json';
  private url = 'http://localhost:4000/api/events';
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getEventList(): Observable<NgoEvent[]> {
    return this.http.get<NgoEvent[]>(this.url)
      .pipe(
        map((data: any[]) => {
          for (const item of data) {
            item.id = item._id;
            delete item._id;
            delete item.__v;
          }
          return data;
        }),
        catchError(this.handleError<NgoEvent[]>('getEventList', []))
      );
  }

  getOneEvent(id: string): Observable<NgoEvent> {
    return this.http.get<NgoEvent>(this.url+"/"+id)
      .pipe(
        map((data: any) => {
          data.id = data._id;
          delete data._id;
          delete data.__v;
          return data;
        }),
        catchError(this.handleError<NgoEvent[]>('getEventList', null))
      );
  }

  addEvent(event: NgoEvent): Observable<NgoEvent> {
    let formData = new FormData();
    for (const key of Object.keys(event)) {
      formData.append(key, event[key]);
    }
    return this.http.post<NgoEvent>(this.url, formData)
      .pipe(
        catchError(this.handleError<NgoEvent>('addEvent', undefined))
      );
  }

  updateEvent(event: NgoEvent): Observable<any> {
    let formData = new FormData();
    for (const key of Object.keys(event)) {
      formData.append(key, event[key]);
    }
    formData.delete('file');
    if (event['file']) {
      formData.append('file', event['file'], event['file'].name);
    } else {
      formData.append('file', null);
    }
    return this.http.put(this.url+"/"+event.id, formData)
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

