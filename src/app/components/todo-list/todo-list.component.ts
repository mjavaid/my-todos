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

  constructor(private todoList: TodoListService) { }

  ngOnInit() {}

  ngOnDestroy() {
    try {
      this.subscription.unsubscribe();
    } catch (e) {}
  }

}
