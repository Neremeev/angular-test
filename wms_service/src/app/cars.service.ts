import { Injectable } from '@angular/core';
import {ConsoleService} from "./console.service";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private consoleService: ConsoleService) { }

  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  addCar (carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
    this.consoleService.log(`Машина ${carName} была добавлена`);
  }
}
