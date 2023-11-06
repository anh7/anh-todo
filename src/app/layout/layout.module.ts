import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutToolbarComponent } from './layout-toolbar/layout-toolbar.component';
import { LayoutMaterialModule } from './layout-material.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';

@NgModule({
  declarations: [
    LayoutToolbarComponent,
    LayoutContentComponent
  ],
  imports: [
    CommonModule,
    LayoutMaterialModule,
  ],
  exports: [
    LayoutToolbarComponent
  ]
})
export class LayoutModule { }
