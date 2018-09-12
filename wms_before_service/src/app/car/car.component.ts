import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  @Input() carItem: {name: string, year: number};

}
