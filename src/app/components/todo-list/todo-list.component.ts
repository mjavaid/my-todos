import { TodoListItem } from './../../models/todo-list-item.model';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  private detectionInterval: any;

  constructor(
    private todoList: TodoListService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.detectionInterval = setInterval(() => {
      this.changeDetectorRef.markForCheck();
    }, 15 * 1000);
  }

  ngOnDestroy() {
    clearInterval(this.detectionInterval);
  }

  deleteItem(event: any, item: TodoListItem) {
    event.stopPropagation();
    this.todoList.removeListItem(item);
  }

}
