import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any = [
      {firstname: 'John',
       lastname: 'Smith',
       role: 'test1',
       email: 'test1@email.com'
      },
      {firstname: 'Ivan',
      lastname: 'Drago',
      role: 'test2',
      email: 'test2@email.com'
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
