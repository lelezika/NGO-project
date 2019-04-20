import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:4000/api/user";

  updateUser(arg0: import("./user").User) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

  nUser:User;
  eUser:User;
  dUser:User;

  //Get all the Users
  getUsers()
  {
    return this.http.get(this.url);
  }

  //Post a new User
  postUser(newUser:User)
  {
    this.nUser=newUser;
    return this.http.post(this.url,this.nUser);
  }

  //Get a single User by email before update or delete
  getForEdit(suppliedEmail:string)
  {
   return this.http.get(this.url+suppliedEmail);
  }

  //Edit the user
  postForEdit(editUser:User)
  {
    this.eUser=editUser;
    console.log("Going to save the edited content");
    console.log(this.eUser);
    return this.http.put(this.url+this.eUser.email,this.eUser);
  }

  deleteUser(suppliedEmail:string)
  {
    console.log("Going to delete");
    console.log(suppliedEmail);
   return this.http.delete(this.url+suppliedEmail);
  }

}


export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
