import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { TodoItem } from '../core/todo-item';

@Component({
  selector: 'anh-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  items: TodoItem[] = [
    {
      id: 1,
      title: 'Install Angular CLI',
      completed: true,
    },
    {
      id: 2,
      title: 'Create new app',
      completed: true,
    },
    {
      id: 3,
      title: 'Serve app',
      completed: true,
    },
    {
      id: 4,
      title: 'Develop app',
      completed: false,
    },
    {
      id: 5,
      title: 'Enjoy app',
      completed: false,
    },
  ];

  drop(event: any) {
    const currentIndex = event.currentIndex;
    const previousIndex = event.previousIndex;
    
    // Swap items at currentIndex and previousIndex
    const temp = this.items[currentIndex];
    this.items[currentIndex] = this.items[previousIndex];
    this.items[previousIndex] = temp;
  }

}
