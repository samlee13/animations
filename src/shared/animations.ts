import { animate, state, style, transition, trigger } from '@angular/animations';

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
  transition('out => in', animate('200ms ease-in'))
]);

export const fade = trigger('fade', [
  state('visible', style({ opacity: 1 })),
  state('invisible', style({ opacity: 0.1 })),
  transition('* => *', animate('2000ms linear'))
]);

export const autoAnimate = trigger('auto', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(500, style({ opacity: 1 }))
  ]),
  transition(':leave', [animate(500, style({ opacity: 0 }))])
]);
