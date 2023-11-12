import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routerTransition } from './router-transition';

@Component({
  selector: 'anh-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.sass'],
  animations: [routerTransition],
})
export class LayoutContentComponent {

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }

}
