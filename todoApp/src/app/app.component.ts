//https://github.com/codedojo/angular2-intro

import {Component} from '@angular/core';

import {ServiceItemService} from "./service-item.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ServiceItemService]
})
export class AppComponent {

  title: string = 'title';

};