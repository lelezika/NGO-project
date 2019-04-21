import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  public userslist: User[] = [];
  // users: User[] = [
  //     {firstname: 'John', lastname: 'Smith',
  //      email: 'test1@email.com', password: '', role: 'test1'
  //     },
  //     {firstname: 'Ivan', lastname: 'Drago',
  //     email: 'test2@email.com', password: '', role: 'test2'
  //     },
  //     {firstname: 'Jim', lastname: 'Dow',
  //      email: 'test3@email.com', password: '', role: 'test3'
  //     },
  //   ];
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe(
    //     (data) => {
    //   // this.userService.getUsers(this.userService).subscribe((res)=>{
    //     console.log(data);
    //     this.userslist = data;
    //     },
    //     (err) => {
    //       console.log(err);
    //     });
    this.findUserList();
  }

  findUserList(): void {
    this.userService.getUsers().subscribe((data:User[]) => this.userslist = data);
    console.log(this.userslist)
  }

  // public userDelete(i: any) {
  //   this.userService.deleteUser(this.userslist[i].email);
  // }
  // public userUpdate(i: any) {
  //   this.userService.updateUser(this.userslist[i]);
  // }

 
}

