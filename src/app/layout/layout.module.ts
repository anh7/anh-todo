import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutToolbarComponent } from './layout-toolbar/layout-toolbar.component';
import { LayoutMaterialModule } from './core/layout-material.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LayoutToolbarComponent,
    LayoutContentComponent,
  ],
  imports: [
    CommonModule,
    LayoutMaterialModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    LayoutToolbarComponent,
    LayoutContentComponent
  ]
})
export class LayoutModule { }
