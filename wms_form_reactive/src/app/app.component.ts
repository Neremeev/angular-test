import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  charsCount: number = 5;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('defaultValue', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]), // обязательно забиндить
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no'),
    });
  }

  onSubmit() {
    console.log('Submited', this.form);
  }

  // {'errorCode': true}
  // null undefined
  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) { // this.charsCount потеряет this
      return {
        'lengthError': true
      };
    }
    return null;
  }

  // ng-pending класс пока идет ожидани, можно повесить лоадинг
  // асинхронный валидатор
  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }

}
