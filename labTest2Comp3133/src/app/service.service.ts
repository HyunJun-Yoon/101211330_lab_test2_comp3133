import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private REST_API_END_POINT = 'https://api.spacexdata.com/v3/launches';
  private data = [];

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.REST_API_END_POINT);
  }
}
