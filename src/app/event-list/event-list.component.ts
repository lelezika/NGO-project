import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(
        data => this.events = data
      );
  }

}
