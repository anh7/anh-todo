import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';

const routes: Routes = [
  { path: '', component: HomeIndexComponent},
  { path: 'todo', component: TodoListComponent},
  { path: 'todo/:id', component: TodoItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
