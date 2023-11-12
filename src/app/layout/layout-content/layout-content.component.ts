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
  constructor(private contexts: ChildrenOutletContexts) {

  }

  getState(outlet: any) {
    console.log(outlet.activatedRouteData.state);
    console.log('outlet');
    console.log(outlet);
    console.log(this.contexts);
    return outlet.activatedRouteData.state;
  }

}
