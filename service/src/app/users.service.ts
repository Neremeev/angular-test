import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public clickCount: number = 0;

  public increase() {
    this.clickCount++;
  }

  public getUsers(): Array<any> {
    return [
      {firstName: 'Ivan', lastName: 'Ivanov'},
      {firstName: 'Petr', lastName: 'Petrov'},
      {firstName: 'Vasily', lastName: 'Vasilyev'}
    ];
  }
}
