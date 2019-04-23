import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { NgoEvent } from '../event';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: NgoEvent[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    this.eventService.getEventList()
      .subscribe(
        data => this.events = data
      );
  }

  getDetailView(id: string) {
    this.router.navigate(['../events', id], {relativeTo: this.route});
  }

  getClass(status) {
    let result = '';
    if (status === 'Active') {
      result += 'event-card';
    } else if (status === 'Inactive') {
      result += 'event-card event-inactive';
    }
    return result + ' mat-card';
  }

}
