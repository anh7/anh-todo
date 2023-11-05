import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutToolbarMenuItem } from './layout-toolbar-menu-item';

@Component({
  selector: 'anh-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.sass']
})
export class LayoutToolbarComponent implements OnInit {
  @Input() menuItems: LayoutToolbarMenuItem[] = [];
  isMobile = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  getMenuItemKey(index: number, item: LayoutToolbarMenuItem): string {
    return item.route;
  }

}
