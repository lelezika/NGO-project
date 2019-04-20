import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { EventService } from '../event.service';
import { Event, EVENT_CATEGORIES, EVENT_STATUSES } from '../event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  categories = EVENT_CATEGORIES;
  statuses = EVENT_STATUSES;

  selectedEvent: Event = null;
  eventForm = new FormGroup({
    eventName: new FormControl(null),
    category: new FormControl(null),
    description: new FormControl(null),
    status: new FormControl(null),
    location:new FormControl(null),
    startDate: new FormControl(null),
    endDate: new FormControl(null),
    startTime: new FormControl(null),
    endTime: new FormControl(null),
    adultTicketPrice: new FormControl(null),
    childTicketPrice: new FormControl(null),
    imagePath: new FormControl(null)
  });

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getOneEvent(id)
      .subscribe(data => {
        // Make a deep copy of data
        this.selectedEvent = Object.assign({}, data);
	// so that these delete statements do not affect this.selectedEvent
	delete data._id;
	delete data.id;
        this.eventForm.setValue(data);
      });
  }

  onSubmit() {
    Object.assign(this.selectedEvent, this.eventForm.value);
    this.eventService.updateEvent(this.selectedEvent)
      .subscribe(() =>
        this.router.navigate('../../', {relativeTo: this.route})
      );
  }

}
