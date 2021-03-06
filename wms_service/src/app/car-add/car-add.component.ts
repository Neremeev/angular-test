import { Component} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent {

  carName = '';

  constructor(private service: CarsService) {}

  addCarToList() {
    this.service.addCar(this.carName);
  }

}
