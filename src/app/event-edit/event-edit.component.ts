import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EventService } from '../event.service';
import { NgoEvent, EVENT_CATEGORIES, EVENT_STATUSES } from '../event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  categories = EVENT_CATEGORIES;
  statuses = EVENT_STATUSES;

  selectedEvent: NgoEvent = null;
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
        // so that the following statement does not affect this.selectedEvent
        if(data.__v !== undefined) {
          delete data.__v;
        }
        delete data.id;
        this.eventForm.setValue(data);
      });
  }

	onFileChanged(event) {
	  this.selectedFile = event.target.files[0];
	}

  onSubmit() {
    this.selectedEvent = Object.assign(this.selectedEvent, this.eventForm.value);
		if (this.selectedEvent['imagePath'] === 'null') {
		  this.selectedEvent['imagePath'] = '';
		}
		this.selectedEvent['file'] = this.selectedFile;
    this.eventService.updateEvent(this.selectedEvent)
		  .pipe(
			catchError((error) => {
			  console.error(`ERROR: ${error}`);
				return of(this.selectedEvent);
			}))
      .subscribe(() => {
        this.router.navigate(['../../event-management'], {relativeTo: this.route});
      });
  }

	onCancel() {
	  this.router.navigate(['../../event-management'], {relativeTo: this.route});
	}

}
