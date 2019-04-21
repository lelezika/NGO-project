import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { ParamMap, Router } from '@angular/router';
import { NgoEvent, EVENT_CATEGORIES, EVENT_STATUSES } from '../event';
import { mimeType } from './mime-type.validator';

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
    imageurl: new FormControl(null)
  });

  constructor(private eventservice:EventService,private router:Router) {
  }

  ngOnInit() {
  }

  onSubmit(){
    
    this.eventData.eventName = this.eventForm.get("eventName").value
    this.eventData.category = this.eventForm.get("category").value
    this.eventData.description = this.eventForm.get("description").value
    this.eventData.startDate = this.eventForm.get("startDate").value
    this.eventData.endDate = this.eventForm.get("endDate").value
    this.eventData.startTime = this.eventForm.get("startTime").value
    this.eventData.status = this.eventForm.get("status").value
    this.eventData.endTime = this.eventForm.get("endTime").value
    this.eventData.location = this.eventForm.get("location").value
    this.eventData.adultTicketPrice = this.eventForm.get("adultTicketPrice").value
    this.eventData.childTicketPrice = this.eventForm.get("childTicketPrice").value
    this.eventData.imagePath = this.eventForm.get("imageurl").value
    this.eventservice.addEvent(this.eventData).subscribe(res => {
      //alert("Successfully added a new event");
      this.router.navigate(["/admin/event-management"]);
    },
    error => {
      console.log("Error while adding new event");
    });  
  }

}
