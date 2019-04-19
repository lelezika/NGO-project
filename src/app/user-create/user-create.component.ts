import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ParamMap, Router } from '@angular/router';
// import { EventCategory } from '../event';
// import { mimeType } from '../mime-type.validator';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userData = new User();
  userForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    role:new FormControl(null)
  });

  constructor(private userservice: UserService, private router: Router) {

  }

  ngOnInit() {
  }


  onSubmit() {
    this.userData.firstName = this.userForm.get("firstName").value
    this.userData.lastName = this.userForm.get("lastName").value
    this.userData.email = this.userForm.get("email").value
    this.userData.password = this.userForm.get("password").value
    this.userData.role = this.userForm.get("role").value

    this.userservice.postUser(this.userData)
        // .subscribe(user => this.userservice.push(user));
    console.log(this.userData);
    this.router.navigate(["/admin/user-management"]);
  }
  onCancel() {
   //    this.eventservice.addEvent(this.eventData).subscribe(event => this.heroes.push(event));
    console.log(this.userData);
    this.router.navigate(["/admin/user-management"]);
  }
}
