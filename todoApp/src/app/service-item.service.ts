import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceItemService {

  constructor() { }

  addTodo(addText) {
    this.todos.push({name: addText, completed: false});
  }

  todos: {name: string, completed: boolean}[] = [
    {
      name: 'Learn JS',
      completed: false
    },
    {
      name: 'Learn Angular',
      completed: true
    },
    {
      name: 'Create app',
      completed: false
    }
  ];

  deleteTodo(i) {
    this.todos.map((item,index) => {
      if (i === index) {
        this.todos.splice(index, 1);
      }
    });
  }

}
