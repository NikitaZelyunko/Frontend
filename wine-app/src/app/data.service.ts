import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getAllWines() {
    return this.http.get('../assets/db.json');
  }
}
