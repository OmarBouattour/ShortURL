import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

    private _loginUrl = "http://localhost:7777/api/login";
    private _registerUrl = "http://localhost:7777/api/register";
    private _shortenurl = "http://localhost:7777/api/url/shorten";
    private _url = "http://localhost:7777/api/url/last";
    private _stats = "http://localhost:7777/api/url/";

    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }
    shortenurl(url) {
      return this.http.post<any>(this._shortenurl, url)
    }
    
    geturl() {
      return this.http.get<any>(this._url)
    }
    getstats() {
      return this.http.get<any>(this._stats)
    }
    registerUser(user) {
      return this.http.post<any>(this._registerUrl, user)
    }
    
    loggedIn() {
      return !!localStorage.getItem('token')    
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
    getAdmin(user) {
      if (user.role=='admin') {
        return true;
      }
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      this._router.navigate(['/login'])
    }
  
}
