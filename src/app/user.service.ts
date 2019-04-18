import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[] = [];
  private url = '/assets/mock-users.json';
  // private usersUpdated = new Subject<User[]>();
  private headerSource = new BehaviorSubject<string>(null);
  moduleHeader = this.headerSource.asObservable();

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
  public getUsers(url?: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
      .pipe(
        //   catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  // Getting single User
  getUserbyid(email: string) {
    return this.httpClient
      .get<User>('http://localhost:4000/api/users/' + email);
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
