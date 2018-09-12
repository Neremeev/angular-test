import { Component, OnInit } from '@angular/core';
import {ServiceItemService} from "../service-item.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos = [];
  constructor(public itemService: ServiceItemService) {
    this.todos = itemService.todos;
  }

  ngOnInit() {
  }

}
