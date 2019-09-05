import { TodoListItem } from './../../models/todo-list-item.model';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  todoList: TodoListItem[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.subscription = this.todoListService.listUpdated.subscribe(newList => {
      this.todoList = newList;
    });
  }

  ngOnDestroy() {
    try {
      this.subscription.unsubscribe();
    } catch (e) {}
  }

}
