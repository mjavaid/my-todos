import { TodoListItem } from './../models/todo-list-item.model';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TodoList } from '../models/todo-list.model';

@Injectable()
export class TodoListService {

  todoList: TodoList;

  listUpdated: ReplaySubject<TodoList> = new ReplaySubject<TodoList>(1);

  constructor() {
    this.todoList = new TodoList();
  }

  addListItem(item: TodoListItem) {
    this.todoList.list.push(item);
    this.listUpdated.next(this.todoList);
  }

  get list() {
    return this.todoList.list;
  }

}
