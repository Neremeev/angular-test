import {
  Component,
  Oninit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class CarComponent implements Oninit {

  @ViewChild('carYearInput') carYearInput: ElementRef;

  @Output('onAddCar') carEmitter  = new EventEmitter<{name: string, year: number}>();

  addCar(carNameEl.value : HTMLInputElement) {

    this.carEmitter.emit(
      {
        name: carNameEl,
        year: +this.carYearInput.nativeElement.value
      }
    );

    //такое лучше не использовать
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
