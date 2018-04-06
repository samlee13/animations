import { animate, state, style, transition, trigger, stagger, query } from '@angular/animations';

export const grow = trigger('grow', [
  state('small', style({ transform: 'scale(1)' })),
  state('large', style({ transform: 'scale(1.4)' })),
  transition('* => *', animate('200ms ease-in'))
]);

export const grow2 = (duration = 200, easing = 'linear') => {
  return trigger('grow2', [
    state('small', style({ transform: 'scale(1)' })),
    state('large', style({ transform: 'scale(1.4)' })),
    transition('* => *', animate(`${duration}ms ${easing}`))
  ]);
};

export const slide = trigger('slide', [
  state('in', style({ transform: 'translate3d(0, 0, 0)' })),
  state('out', style({ transform: 'translate3d(150%, 0, 0)' })),
  transition('in => out', animate('200ms ease-in')),
  transition('out => in', animate('200ms ease-out'))
]);

export const fade = trigger('fade', [
  state('visible', style({ opacity: 1 })),
  state('invisible', style({ opacity: 0.1 })),
  transition('* => *', animate('2000ms linear'))
]);

export const animateList = trigger('animateList', [
  transition(':enter', [
    query(':enter', style({ opacity: 0 })),
    query(':enter', stagger('65ms', [
      animate('65ms', style({ opacity: 1 }))
    ]))
  ]),
  transition(':leave', [
    query(':leave', style({ opacity: 1 })),
    query(':leave', stagger('65ms reverse', [
      animate('65ms', style({ opacity: 0 }))
    ]))
  ]),


])