import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

interface ItemsResponse {
  results: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
  }
  // getmyClass(): Promise<myClass[]> {
  //   return this.http.get(URL)
  //     .toPromise()
  //     .then(response => response.json().data as myClass[])
  //     .catch(this.handleError);
  // getHospitalData() {
    // return this.http.get<ItemsResponse>('https://www.healthcare.gov/api/index.json?limit=20', he).pipe(

    // );
  // }
}
