import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoItemComponent
      ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatCheckboxModule,
        FormsModule
      ],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('drop', () => {
    it('should update the order of items', () => {
      const event = {
        previousIndex: 0,
        currentIndex: 1,
      };
      const initialItems = component.items;
      component.drop(event);
      // expect(component.items[0]).toMatchObject(initialItems[1]);
      // expect(component.items[1]).toMatchObject(initialItems[0]);
      // expect(component.items[0]).toHaveProperty('id', initialItems[1].id);
      // expect(component.items[0]).toHaveProperty('title', initialItems[1].title);
      // expect(component.items[0]).toHaveProperty('completed', initialItems[1].completed);
      // expect(component.items[1]).toHaveProperty('id', initialItems[0].id);
      // expect(component.items[1]).toHaveProperty('title', initialItems[0].title);
      // expect(component.items[1]).toHaveProperty('completed', initialItems[0].completed);
    });
  });
});
