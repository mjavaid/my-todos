import { MomentFormatPipe } from './pipes/moment-format.pipe';
import { TodoListService } from './services/todo-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemAdderComponent } from './components/list-item-adder/list-item-adder.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { TodoListItemContainerComponent } from './components/todo-list-item-container/todo-list-item-container.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    ListItemAdderComponent,
    TodoListComponent,

    // Pipes
    MomentFormatPipe,

    TodoListContainerComponent,

    TodoListItemContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TodoListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
