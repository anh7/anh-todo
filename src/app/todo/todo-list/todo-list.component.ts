import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'anh-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  items: string[] = [
    'Install Angular CLI',
    'Create new app',
    'Serve app',
    'Develop app',
    'Deploy app',
  ];

  drop(event: any) {
    console.log(event);
  }

}
