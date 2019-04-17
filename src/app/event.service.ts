import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Event } from './event';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: NgoEvent[] = [];
  private url = '/assets/mock-events.json';
  private eventsUpdated = new Subject<NgoEvent[]>();
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url)
      .pipe(
        catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  // getEventbyid(id: number): Observable<Event> {
  //   const url = `${this.eventurl}/${id}`;
  //   return this.http.get<Event>(url).pipe(
  //     tap(_ => console.log(`fetched event id=${id}`)),
  //     catchError(this.handleError<Event>(`getEvents id=${id}`))
  //   );
  // }

  // updateEvent (event: Event): Observable<any> {
  //   return this.http.put(this.eventurl, event, this.httpOptions).pipe(
  //     tap(_ => console.log(`updated event id=${event.id}`)),
  //     catchError(this.handleError<any>('updateEvent'))
  //   );
  // }

  // addEvent (event: Event): Observable<Event> {
  //   return this.http.post<Event>(this.eventurl, event, this.httpOptions).pipe(
  //     tap((newEvent: Event) => console.log(`added hero w/ id=${newEvent.id}`)),
  //     catchError(this.handleError<Event>('addEvent'))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getEventUpdateListener() {
    return this.eventsUpdated.asObservable();
  }

  // Getting single Event
  getEventbyid(id: string) {
    return this.http
      .get<{
        _id: string,
        eventName: string;
        description: string;
        category: string;
        startDate: string;
        endDate: string;
        startTime: string;
        endTime: string;
        location: string;
        status: string;
        imagePath: string;
        adultTicketPrice: string;
        childTicketPrice: string;
      }>('http://localhost:4000/api/events/' + id);
  }

// Adding Event
  addEvent(
    name: string,
    ctgy: string,
    desc: string,
    stat: string,
    loc: string,
    sDate: string,
    eDate: string,
    sTime: string,
    eTime: string,
    adltTktPrice: string,
    chldTktPrice: string,
    image: File
  ) {
    const eventData = new FormData();
    eventData.append("eventName", name);
    eventData.append("description", desc);
    eventData.append("category", ctgy);
    eventData.append("status", stat);
    eventData.append("location", loc);
    eventData.append("startDate", sDate);
    eventData.append("endDate", eDate);
    eventData.append("startTime", sTime);
    eventData.append("endTime", eTime);
    eventData.append("adultTicketPrice", adltTktPrice);
    eventData.append("childTicketPrice", chldTktPrice);
    eventData.append("image", image, name);
    this.http.post<{message: string, event: NgoEvent}>
    (
      'http://localhost:4000/api/events',
      eventData
    ).subscribe(responseData => {
        const event: NgoEvent = {
          id: responseData.event.id,
          eventName: responseData.event.eventName,
          description: responseData.event.description,
          category: responseData.event.category,
          startDate: responseData.event.startDate,
          endDate: responseData.event.endDate,
          startTime: responseData.event.startTime,
          endTime: responseData.event.endTime,
          location: responseData.event.location,
          status: responseData.event.status,
          imagePath: responseData.event.imagePath,
          adultTicketPrice: responseData.event.adultTicketPrice,
          childTicketPrice: responseData.event.childTicketPrice
        };
        this.events.push(event);
        this.eventsUpdated.next([...this.events]);
        this.router.navigate(["/admin/event-management"]);
      });
  }

  // Updating Event with Id
  updateEvent(
    id: string,
    name: string,
    ctgy: string,
    desc: string,
    stat: string,
    loc: string,
    sDate: string,
    eDate: string,
    sTime: string,
    eTime: string,
    adltTktPrice: string,
    chldTktPrice: string,
    image: File | string
  ) {
    let eventData: NgoEvent | FormData;
    if (typeof image === "object") {
      eventData = new FormData();
      eventData.append("id", id);
      eventData.append("eventName", name);
      eventData.append("category", ctgy);
      eventData.append("description", desc);
      eventData.append("status", stat);
      eventData.append("location", loc);
      eventData.append("startDate", sDate);
      eventData.append("endDate", eDate);
      eventData.append("startTime", sTime);
      eventData.append("endTime", eTime);
      eventData.append("adultTicketPrice", adltTktPrice);
      eventData.append("childTicketPrice", chldTktPrice);
      eventData.append("imagePath", image, name);
    } else {
      eventData = {
        id: id,
        eventName: name,
        category: ctgy,
        description: desc,
        status: stat,
        location: loc,
        startDate: sDate,
        endDate: eDate,
        startTime: sTime,
        endTime: eTime,
        adultTicketPrice: adltTktPrice,
        childTicketPrice: chldTktPrice,
        imagePath: image,
      };
    }
    this.http
      .put('http://localhost:4000/api/events/' + id, eventData)
      .subscribe(response => {
        const updatedEvents = [...this.events];
        const oldEventIndex = updatedEvents.findIndex(e => e.id === id);
        const event: NgoEvent = {
          id: id,
          eventName: name,
          category: ctgy,
          description: desc,
          status: stat,
          location: loc,
          startDate: sDate,
          endDate: eDate,
          startTime: sTime,
          endTime: eTime,
          adultTicketPrice: adltTktPrice,
          childTicketPrice: chldTktPrice,
          imagePath: "",
        };
        updatedEvents[oldEventIndex] = event;
        this.events = updatedEvents;
        this.eventsUpdated.next([...this.events]);
        this.router.navigate(["/api/event-management"]);
      });
  }
  
  setModuleHeader(value){
    this.headerSource.next(value);
  }

}

export interface NgoEvent {
  id: string;
  eventName: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  status: string;
  imagePath: string;
  adultTicketPrice: string;
  childTicketPrice: string;
}
