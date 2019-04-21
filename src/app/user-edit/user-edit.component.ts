import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userServices: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  nUser: User;
  displayData: any = [];

  ngOnInit() {
    // //Fetch the Email from the activated route
    this.activatedRoute.params.subscribe(
      params => (this.email = params["email"])
    );

    // Call the api to get the particular user's details and display the values in the form controls
    this.userServices.getForEdit(this.email).subscribe(data => {
      this.displayData = data;
      this.firstName = this.displayData["firstName"];
      this.lastName = this.displayData["lastName"];
      this.password = this.displayData["password"];
      this.role = this.displayData["role"];
    });
  }

  onSubmit(userForm) {
    this.firstName = userForm.value["firstName"];
    this.lastName = userForm.value["lastName"];
    this.email = userForm.value["email"];
    this.password = userForm.value["password"];
    this.role = userForm.value["role"];
    //Create a new User with the model and send the data to service


    this.nUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.userServices.postForEdit(this.nUser).subscribe(
      res => {
        // alert("Successfully edited the user");
        this.router.navigate(["admin/user-management"]);
      },
      error => {
        console.log("Error while adding new user");
      }
    );
  }
}