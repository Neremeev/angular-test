import {Component, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";
import {HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  colors = [
    'red',
    'yellow',
    'blue',
    'grey',
    'green',
    'pink',
    'orange',
  ];

  cars = [];
  carName = '';
  appTitle = '';

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getAppTitle().subscribe((response: HttpResponse) => {
      this.appTitle = response.value;
    } );
  }

  loadCars() {
    this.carsService.getCars().subscribe((response: HttpResponse) => {
      this.cars = response;
    } );
  }

  addCar() {
    this.carsService.addCar(this.carName, this.getRandColor()).subscribe((response: HttpResponse) => {
      this.cars.push(response);
      console.log(response);
    });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car) {
    this.carsService.changeColor(car, this.getRandColor()).subscribe((response: HttpResponse) => {
      car.color = response.color;
    });
  }

  deleteCar(car) {
    this.carsService.deleteCar(car).subscribe((response: HttpResponse) => {
      this.cars = this.cars.filter((item) => {
          return item.id !== car.id;
        });
    });
  }

}
