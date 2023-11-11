import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutToolbarComponent } from './layout-toolbar/layout-toolbar.component';
import { LayoutMaterialModule } from './core/layout-material.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutToolbarComponent,
    LayoutContentComponent,
  ],
  imports: [
    CommonModule,
    LayoutMaterialModule,
    RouterModule,
  ],
  exports: [
    LayoutToolbarComponent,
    LayoutContentComponent
  ]
})
export class LayoutModule { }
