import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoListItem } from 'src/app/models/todo-list-item.model';

@Component({
  selector: 'app-list-item-adder',
  templateUrl: './list-item-adder.component.html',
  styleUrls: ['./list-item-adder.component.scss']
})
export class ListItemAdderComponent implements OnInit {

  itemText: string;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  addItem() {
    if (this.itemText.trim().length === 0) { return; }
    this.todoListService.addListItem(new TodoListItem(this.itemText));
    this.itemText = '';
  }

}
