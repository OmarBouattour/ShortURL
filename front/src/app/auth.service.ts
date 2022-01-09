import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

    private _loginUrl = "/api/login";
    private _registerUrl = "/api/register";
    private _shortenurl = "/api/url/shorten";
    private _url = "/api/url/last";
    private _stats = "/api/url/";

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
