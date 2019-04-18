import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [
      {firstname: 'John', lastname: 'Smith',
       email: 'test1@email.com', password: '', role: 'test1'
      },
      {firstname: 'Ivan', lastname: 'Drago',
      email: 'test2@email.com', password: '', role: 'test2'
      },
      {firstname: 'Jim', lastname: 'Dow',
       email: 'test3@email.com', password: '', role: 'test3'
      },
    ];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
        (data) => {
      // this.userService.getUsers(this.userService).subscribe((res)=>{
        console.log(data);
        this.users = data;
        },
        (err) => {
          console.log(err);
        });
  }
  public userDelete(i: any) {
    this.userService.deleteUser(this.users[i].email);
  }
  public userUpdate(i: any) {
    this.userService.updateUser(this.users[i]);
  }
}

