import { Component, OnInit } from '@angular/core';
import {ServiceItemService} from "../service-item.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  addText = '';
  constructor(public itemService: ServiceItemService) {}

  ngOnInit() {
  }

  addTodo() {
    this.itemService.addTodo(this.addText);
    this.addText = '';
  }
}
