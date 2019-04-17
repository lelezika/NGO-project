import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-registration-form',
  templateUrl: './event-registration-form.component.html',
  styleUrls: ['./event-registration-form.component.css']
})
export class EventRegistrationFormComponent implements OnInit {

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
    public dialogRef: MatDialogRef<EventRegistrationFormComponent>
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onContinue() {
    console.warn(this.profileForm.value);
    this.dialogRef.close();
  }

}
