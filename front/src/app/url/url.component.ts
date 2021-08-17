import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  urlData = {'longUrl': ''}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  shortenurl(){
    this._auth.shortenurl(this.urlData)
    .subscribe(
      res => {
        console.log(res)
        const json = JSON.stringify(res.shortUrl);  

        const unquoted = json.replace(/\"/g, "");

        document.getElementById("response").innerHTML = unquoted;

      },
      err => {
        console.log(err);
        
        
      }
    )   
  }

}
