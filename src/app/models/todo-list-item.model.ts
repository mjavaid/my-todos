const uuidv4 = require('uuid/v4');

export class TodoListItem {
  public readonly id: any;
  constructor(public text: string, public addedOn: number = (new Date()).getTime()) {
    this.id = uuidv4();
  }
}
