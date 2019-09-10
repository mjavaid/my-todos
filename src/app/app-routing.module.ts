import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { TodoListItemContainerComponent } from './components/todo-list-item-container/todo-list-item-container.component';


const routes: Routes = [
  { path: '', component: TodoListContainerComponent },
  { path: 'task/:id', component: TodoListItemContainerComponent },
  { path: 'task/:id/edit', component: TodoListItemContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
