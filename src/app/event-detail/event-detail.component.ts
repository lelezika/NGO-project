import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { Event, EventCategory } from '../event';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { EventRegistrationFormComponent } from '../event-registration-form/event-registration-form.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public EventCategory = EventCategory;
  selectedEvent: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.selectedEvent = {id: 1, name: 'Event 1',
      description: 'This is an event', category: 0,
      startDate: null,
      endDate: null,
      location: 'South Plainfield, NJ',
      allowRegistration: true, imagePath: null,
      adultPrice: 2.99, childPrice: 1.99
    };
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvents()
      .pipe(
        map((events: Event[]): Event[] => {
          const result = [];
          for (const event of events) {
            if (event.id === id) {
              const newEvent = event;
              newEvent.startDate = new Date(event.startDate);
              newEvent.endDate = new Date(event.endDate);
              result.push(newEvent);
            }
          }
          return result;
        }))
      .subscribe((events: Event[]): void => {
        if (events.length === 0) {
          console.error(`Event ${id} Not Found`);
          this.router.navigate(['/page-not-found']);
        } else {
          if (events.length > 1) {
            console.error(`Multiple Events With ID ${id}`);
          }
          this.selectedEvent = events[0];
        }
      });
  }

  displayForm() {
    const dialogRef = this.dialog.open(EventRegistrationFormComponent, {
      width: '50%'
    });
  }

  return() {
  this.router.navigate(['eventlist']);
  }

}
