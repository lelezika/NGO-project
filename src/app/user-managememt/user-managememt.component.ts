import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-managememt',
  templateUrl: './user-managememt.component.html',
  styleUrls: ['./user-managememt.component.css']
})
export class UserManagememtComponent implements OnInit {
  users: any=[
      {"firstname": "John",
       "lastname": "Smith", 
       "role": "test1",
       "email": "test1@email.com"
      },
      {"firstname": "Ivan",
      "lastname": "Drago", 
      "role": "test2",
      "email": "test2@email.com"
      },
    ]
  constructor() { }

  ngOnInit() {
  }

}
