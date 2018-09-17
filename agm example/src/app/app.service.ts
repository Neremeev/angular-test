import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient) { }


    getStations() {
        return this.httpClient.get('http://server-heroku-test.herokuapp.com/data');
    }

}
