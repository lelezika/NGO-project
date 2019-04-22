import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
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
  retrived_user: User = new User();

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => (this.email = params["email"])
    );

    this.userServices.getUserByEmail(this.email).subscribe((data:User) => {
      this.retrived_user = data;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.password = data.password;
      this.role = data.role;
    });
  }
  

  onSubmit(userForm) {

    this.userServices.deleteUser(this.email).subscribe(
      res => {
        // alert("Successfully deleted the user");
        this.router.navigate(["admin/user-management"]);
      },
      error => {
        console.log("Error while deleting this user");
      }
    );
  }

  onCancel(){
    this.router.navigate(["admin/user-management"]);
  }
}


