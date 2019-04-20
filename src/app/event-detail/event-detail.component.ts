import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { NgoEvent, EVENT_CATEGORIES } from '../event';
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

  selectedEvent: NgoEvent;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.selectedEvent = {id: '1', eventName: 'Event 1',
      description: 'This is an event', category: 'Presentation',
      startDate: '', startTime: '',
      endDate: '', endTime: '',
      location: 'nowhere',
      status: 'Active', imagePath: null,
      adultTicketPrice: 2.99, childTicketPrice: 1.99
    };
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getOneEvent(id)
      .subscribe(
        data => this.selectedEvent = data
      );
  }

  displayForm() {
    const dialogRef = this.dialog.open(EventRegistrationFormComponent, {
      width: '50%',
      data: {
        selectedEvent: this.selectedEvent
      }
    });
  }

  return() {
  this.router.navigate(['../../eventlist'], {relativeTo: this.route});
  }

}
