import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2016,
      color: 'grey'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2017,
      color: 'red'
    },
    {
      name: 'BMW',
      id: 3,
      year: 2010,
      color: 'blue'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2012,
      color: 'orange'
    }
  ]
}
