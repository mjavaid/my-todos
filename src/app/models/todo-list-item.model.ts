export class TodoListItem {
  constructor(public text: string, public addedOn: number = (new Date()).getTime()) {}
}
