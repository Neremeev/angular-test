import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: [`
  //   input.ng-invalid.ng-touched {
  //     border: 1px solid red;
  //   }
  // `]
})
export class AppComponent {

  @ViewChild('form') form: NgForm; // Альтернативный способ получения формы

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru'; // для дефолтных значений, а так можно просто писать ngModel

  formData = {};
  isSubmited = false;

  // submitForm(form: NgForm) {
  //   console.log(form);
  // }

  addRandEmail() {
    const randEmail = 'wfm@yandex.ru';
    // полностью изменить форму
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    // единично изменить форму
    this.form.form.patchValue({
      user: {
        email: randEmail
      }
    });
  }

  // Альтернативный способ получения формы
  submitForm(form: HTMLFormElement) {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset(); // чистит форму
    console.log('Submited', this.form);
  }
}
