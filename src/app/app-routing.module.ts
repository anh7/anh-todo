import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { state: 'home' },
  },
  { 
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
    data: { state: 'todo' },
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: { state: 'auth' },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy:PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
