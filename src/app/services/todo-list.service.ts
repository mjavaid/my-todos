import { TodoListItem } from './../models/todo-list-item.model';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class TodoListService {

  todoList: TodoListItem[] = [];

  listUpdated: ReplaySubject<TodoListItem[]> = new ReplaySubject<TodoListItem[]>(1);

  addListItem(item: TodoListItem) {
    this.todoList.push(item);
    this.listUpdated.next(this.todoList);
  }

}
