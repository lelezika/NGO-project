import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { NgoEvent } from '../event';

@Component({
  selector: 'app-event-registration-form',
  templateUrl: './event-registration-form.component.html',
  styleUrls: ['./event-registration-form.component.css']
})
export class EventRegistrationFormComponent implements OnInit {

  event: NgoEvent;
  route: ActivatedRoute;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    contactNumber: new FormControl(''),
    address: new FormControl(''),
    amountAdults: new FormControl(0),
    amountChildren: new FormControl(0),
  });

  constructor(
    public dialogRef: MatDialogRef<EventRegistrationFormComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.event = data.selectedEvent;
    this.route = data.route;
  }

  ngOnInit() {
  }

  adultSubtotal(form: FormGroup): number {
    return form.get('amountAdults').value*this.event.adultTicketPrice;
  }

  childSubtotal(form: FormGroup): number {
    return form.get('amountChildren').value*this.event.childTicketPrice;
  }

  totalPrice(form: FormGroup): number {
    return this.adultSubtotal(form) + this.childSubtotal(form);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onContinue() {
    console.warn(this.profileForm.value);
    this.dialogRef.close();
    this.router.navigate(['../registered'], {relativeTo: this.route});
  }

}
