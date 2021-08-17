import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  stats= [];
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this._auth.getstats()
      .subscribe(
        res => this.stats = res,
        
      )
  }

}
