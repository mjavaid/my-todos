import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models/todo-list-item.model';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list-item-container',
  templateUrl: './todo-list-item-container.component.html',
  styleUrls: ['./todo-list-item-container.component.scss']
})
export class TodoListItemContainerComponent implements OnInit {

  listItem: TodoListItem;

  constructor(private route: ActivatedRoute, private listService: TodoListService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listItem = this.listService.getListItem(id);
  }

}
