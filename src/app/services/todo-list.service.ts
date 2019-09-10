import { TodoList } from './../models/todo-list.model';
import { TodoListItem } from './../models/todo-list-item.model';
import { Injectable } from '@angular/core';
import { ReplaySubject, empty } from 'rxjs';

@Injectable()
export class TodoListService {

  todoList: TodoList;

  listUpdated: ReplaySubject<TodoList> = new ReplaySubject<TodoList>(1);

  constructor() {
    this.todoList = this.loadList();
  }

  addListItem(item: TodoListItem) {
    this.todoList.list.push(item);
    this.listUpdated.next(this.todoList);
    this.saveList();
  }

  get list() {
    return this.todoList.list;
  }

  private saveList() {
    window.localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  private loadList() {
    const emptyList = new TodoList();
    if (window.localStorage) {
      try {
        return JSON.parse(window.localStorage.getItem('todo-list')) || emptyList;
      } catch (e) {
        console.error('Could not load from localStorage:', e);
        return emptyList;
      }
    } else {
      return emptyList;
    }
  }

}
