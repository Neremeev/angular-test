import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.httpClient.get('http://localhost:3000/cars', {
      // в Post запросе 3 параметр
      headers: headers
    });
  }

  addCar(carName: string, color: string) {
    const data = {
      name: carName,
      color: color
    };
    return this.httpClient.post('http://localhost:3000/cars', data);
  }

  changeColor(car, color: string) {
    const data = {
      id: car.id,
      name: car.name,
      color: color
    }
    return this.httpClient.put(`http://localhost:3000/cars/${car.id}`, data);
  }

  deleteCar(car) {
    return this.httpClient.delete(`http://localhost:3000/cars/${car.id}`);
  }

  getAppTitle() {
    return this.httpClient.get('http://localhost:3000/title');
  }

}
