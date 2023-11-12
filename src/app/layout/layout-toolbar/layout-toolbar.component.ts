import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutToolbarMenuItem } from '../core/layout-toolbar-menu-item';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'anh-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.sass']
})
export class LayoutToolbarComponent implements OnInit, OnDestroy {
  @Input() menuItems: LayoutToolbarMenuItem[] = [];
  $isMobile: Observable<boolean> | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.$isMobile = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ])
    .pipe(
      map((result) => {
        if (result.matches) {
          return true;
        } else {
          return false;
        }
      })
    )
  }

  ngOnDestroy(): void {
      
  }

  getMenuItemKey(index: number, item: LayoutToolbarMenuItem): string {
    return item.route;
  }

}
