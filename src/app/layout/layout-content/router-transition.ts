import {trigger, animate, style, group, query, transition, animateChild} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [    
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
        group([ 
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.6s ease-in-out', style({ transform: 'translateX(0%)' }))
          ]),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.6s ease-in-out', style({ transform: 'translateX(-200%)' }))]),
        ]),
      ])
]);