import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'; 
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export interface LoginResponse {

}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 
  private user: SocialUser;
  private loggedIn: boolean;
 
  private loginUrl = 'https://brotherlogic-backend.com/login.LoginService/Login';

  constructor(private authService: AuthService, private http: HttpClient) { }
 
 private handleError(error: HttpErrorResponse) {
   console.error('An error occurred:', error.error.message);
 }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      if (this.loggedIn) {
        console.log("Sending off token");
        var req = {token:user.idToken};
       var resp = this.http.post<LoginResponse>(this.loginUrl, req, httpOptions);
       console.log(resp.subscribe());
      }
    });
  }
}

