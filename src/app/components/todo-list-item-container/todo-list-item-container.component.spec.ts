import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemContainerComponent } from './todo-list-item-container.component';

describe('TodoListItemContainerComponent', () => {
  let component: TodoListItemContainerComponent;
  let fixture: ComponentFixture<TodoListItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
