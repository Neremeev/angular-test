import { Component } from '@angular/core';
import {changeWidthTrigger, divTrigger} from "./app.animations";
import { AnimationEvent } from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent {

  isVisible = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('start', event);
  }

  onAnimationDone(event) {
    console.log('done', event);
  }

}



