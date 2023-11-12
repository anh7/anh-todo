import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'anh-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})

export class TodoItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() item! : TodoItem;
  
  constructor() { }

  ngOnInit(): void {
    console.log('TodoItemComponent: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('TodoItemComponent: ngOnDestroy');
  }

  ngOnChanges(): void {
    console.log('TodoItemComponent: ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('TodoItemComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('TodoItemComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('TodoItemComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('TodoItemComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('TodoItemComponent: ngAfterViewChecked');
  }

  delete() {
    console.log('TodoItemComponent: delete');
  }
}
