import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { USER_ROLES } from '../user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  userRoles = USER_ROLES;

  signupForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    role: new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

}
