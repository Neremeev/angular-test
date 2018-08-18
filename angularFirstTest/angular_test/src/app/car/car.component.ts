import {
  Component,
  Input,
  ContentChild,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentCheck,
  AfterViewInit,
  AfterViewCheck,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentCheck,
  AfterViewInit,
  AfterViewCheck,
  OnDestroy
{
  @Input('carItem') car: {name: string, year: number};
  // так как из cars берется
  @ContentChild('carHeading') carHeading: ElementRef;

  //первый этап жц - 1
  constructor() {
    console.log('constructor');
  }

  //второй наследование интерфейсов - 2
  ngOnInit() {
    console.log('ngOnInit');
  }

  //при изменении компонента
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }

  //проверяет изменения - 3 (логику большую не писать - часто вызывается)
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  //после подгрузки данных - 4
  AfterContentInit() {
    console.log('AfterContentInit');
  }

  //после подгрузки данных - 5
  AfterContentCheck() {
    console.log('AfterContentCheck');
  }

  //после подгрузки view чтобы работать с дом - 6
  AfterViewInit() {
    console.log('AfterViewInit');
  }

  //после подгрузки view чтобы работать с дом
  AfterViewCheck() {
    console.log('AfterViewCheck');
  }

  // при удалении какого-либо элемента
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


}
