import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient} from '@angular/common/http';


=======
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user';
import { Router } from '@angular/router';
>>>>>>> refs/remotes/origin/master

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD
  constructor(private http:HttpClient) { }

  nUser:User;
  eUser:User;
  dUser:User;

  //Get all the Users
  getUsers()
  {
    return this.http.get("http://localhost:4000/api/user");
  }

  //Post a new User
  postUser(newUser:User)
  {
    this.nUser=newUser;
    return this.http.post("http://localhost:4000/api/user",this.nUser);
  }

  //Get a single User by email before update or delete
  getForEdit(suppliedEmail:string)
  {
   return this.http.get("http://localhost:4000/api/user/"+suppliedEmail);
  }

  //Edit the user
  postForEdit(editUser:User)
  {
    this.eUser=editUser;
    console.log("Going to save the edited content");
    console.log(this.eUser);
    return this.http.put("http://localhost:4000/api/user/"+this.eUser.email,this.eUser);
  }

  deleteUser(suppliedEmail:string)
  {
    console.log("Going to delete");
    console.log(suppliedEmail);
   return this.http.delete("http://localhost:4000/api/user/"+suppliedEmail);
  }

}


export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
=======
  public users: User[] = [];
  private url = '/assets/mock-users.json';
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private router: Router) { }

  public addUser(user: User) {
    //alert('adding user ' + user.email);
    return this.httpClient.post(`${this.url}/users/${user.email}`, user);
  }
  public updateUser(user: User) {
    //alert('edit user ' + user.email);
    return this.httpClient.put(`${this.url}/users/${user.email}`, user);
  }
  public deleteUser(email: string) {
    //alert('deleting user ' + email);
    return this.httpClient.delete(`${this.url}/users/${email}`);
  }
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url, this.httpOptions)
  }

  // Getting single User
  getOneUser(email: string): Observable<User> {
    const params = new HttpParams({
      fromString: 'email=' + email
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<User>(this.url, findhttpOptions)
      .pipe(catchError(this.handleError<User>('getOneUser email' + email)));
    }

  // getUserUpdateListener() {
  //   return this.usersUpdated.asObservable();
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // public retrieve_pagination_links(response){
  //   const linkHeader = this.parse_link_header(response.headers.get('Link'));
  //   this.firstPage = linkHeader["first"];
  //   this.lastPage =  linkHeader["last"];
  //   this.prevPage =  linkHeader["prev"];
  //   this.nextPage =  linkHeader["next"];
}
>>>>>>> refs/remotes/origin/master
