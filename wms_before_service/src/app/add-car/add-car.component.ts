import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})

export class AddCarComponent {

  carName: string = '';
  carYear: number = 2018;
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  addCar() {
    this.carEmitter.emit({name: this.carName, year: this.carYear})
    this.carName = '';
    this.carYear = 2018;
  }

}
