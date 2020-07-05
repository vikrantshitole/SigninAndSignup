// importing required Components / Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Declare Variables

  //Server Url to Send data
  Baseurl = 'http://localhost:3000/api/chatapp';
  // To pass the data in between Components
  private username = new BehaviorSubject('default message');
  currentUsername = this.username.asObservable();
  constructor(private http: HttpClient) {}
  //Setting the current username to let other components get access
  setUsername(message: string) {
    this.username.next(message);
  }
  // Changing Password method to change the password of user in the backend
  changePassword(username, body) {
    return this.http.put(`${this.Baseurl}/change/${username.username}`, body);
  }
  // Registering user and sending data to the backend
  registerUser(body): Observable<any> {
    return this.http.post(`${this.Baseurl}/register`, body);
  }
  // login user and to check weather the user exists in the backend
  loginUser(body): Observable<any> {
    return this.http.post(`${this.Baseurl}/login`, body);
  }
  // To check weather the username to change the password
  getUser(body): Observable<any> {
    return this.http.get(`${this.Baseurl}/forget/${body.username}`);
  }
}
