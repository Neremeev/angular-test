export class CarsService {

  cars: {name: string, year: number}[] = [
    {
      name: 'Ford',
      year: 2015
    },
    {
      name: 'Mazda',
      year: 2016
    },
    {
      name: 'Audi',
      year: 2014
    },
    {
      name: 'BMW',
      year: 2018
    }
  ];

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }

}