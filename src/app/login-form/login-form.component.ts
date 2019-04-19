import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`${this.loginForm.get('username').value} tried to login`);
  }

}
