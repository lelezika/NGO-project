import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { NgoEvent, EVENT_CATEGORIES, EVENT_STATUSES } from '../event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  [x: string]: any;

  categories = EVENT_CATEGORIES;
  statuses = EVENT_STATUSES;

  eventData = new NgoEvent();
	selectedFile: File;
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
		imagePath: new FormControl(null),
  });

  constructor(private eventservice:EventService,private router:Router) {
  }

  ngOnInit() {
  }

  onSubmit(){
    Object.assign(this.eventData, this.eventForm.value);
    console.log(this.eventData);
    this.eventservice.addEvent(this.eventData).subscribe(res => {
      //alert("Successfully added a new event");
      this.router.navigate(["/admin/event-management"]);
    },
    error => {
      console.log("Error while adding new event");
    });  
  }

}
