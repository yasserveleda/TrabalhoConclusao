import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Response {
    data: {
        results: any;
    };
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

    public httpOptions;

    constructor(public http: HttpClient) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/xml',
          'Accept': 'application/xml'
        })
      };
    }

    public getProjects() {
        const url = ``;
        return this.http.get(url);
    }
}