import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService, NgoEvent } from '../event.service';
import { ParamMap, Router } from '@angular/router';
import { EventCategory } from '../event';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  [x: string]: any;

  categories = Object.keys(EventCategory)
    .filter(k => typeof EventCategory[k as any] === 'number');
  EventCategory = EventCategory;

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
  imagePreview: string;

  constructor(private eventservice:EventService,private router:Router) {
    
   }

  ngOnInit() {
  }




    onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.eventForm.get('imageCtrl').updateValueAndValidity();
    /**
     * Displaying and validating Image as soon as picked
     */
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);
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
    this.eventservice.addEvent(this.eventData)
    this.eventservice.addEvent(this.eventData).subscribe(event => this.heroes.push(event));
    this.router.navigate(["/admin/event-management"]);
    console.log(this.eventData)
    
  }

}
