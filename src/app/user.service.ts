import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  nUser:User;
  eUser:User;
  dUser:User;
  private users: User[] = [];
  //  private url = '/assets/mock-events.json';
  private url = 'http://localhost:4000/api/user';
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();


  constructor(private http:HttpClient) { }

  //Get all the Users
  getUsers()
  {
    return this.http.get(this.url);
  }

  // Post a new User
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user)
      .pipe(
        catchError(this.handleError<User>('addUser', undefined))
      );
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}


