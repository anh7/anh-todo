import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutToolbarComponent } from './layout-toolbar/layout-toolbar.component';
import { MaterialModule } from '../common/material/material.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';

@NgModule({
  declarations: [
    LayoutToolbarComponent,
    LayoutContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LayoutToolbarComponent
  ]
})
export class LayoutModule { }
