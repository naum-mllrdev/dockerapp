import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  globalData: any;
  countryData: any;
  reportDate: Date;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://api.covid19api.com/summary'
      )
      .subscribe((response) => {
        if (response) {
          this.globalData = response['Global'];
          this.countryData = response['Countries'];
          this.reportDate = response['Date'];
        }
      });
  }
}
