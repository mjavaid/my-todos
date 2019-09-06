const uuidv4 = require('uuid/v4');
import { TodoListItem } from './todo-list-item.model';

export class TodoList {
  public list: TodoListItem[];
  public readonly id: any;

  constructor(list: TodoListItem[] = []) {
    this.list = list;
    this.id = uuidv4();
  }
}
