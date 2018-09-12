import {Component, OnInit} from '@angular/core';
import {ConsoleService} from './console.service';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent implements OnInit {

  cars = [];

  constructor(private service: CarsService) {}

  ngOnInit () {
    this.cars = this.service.cars;
  }
}
