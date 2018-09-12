import {Component, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [CarsService]
})
export class CarsComponent implements OnInit {

  cars = [];

  constructor(private service: CarsService) {
    console.log(service);
  }

  ngOnInit() {
    this.cars = this.service.cars;
  }

  updateCarList(car: {name: string, year: number}) {
    this.service.updateCarList(car);
  }

}
