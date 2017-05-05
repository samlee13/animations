import { trigger, transition, state, style, animate, keyframes }
        from '@angular/animations';

export const grow = trigger('grow' , [
    state('small', style({ transform: 'scale(1)' })),
    state('large', style({ transform: 'scale(1.4)' })),
    transition('small => large', animate('200ms ease-in')),
    transition('large => small', animate('200ms ease-out'))
]);

export const flyInOut = trigger('flyInOut', [
    state('in', style({ transform: 'translate3d(0, 0, 0)' })),
    state('out', style({ transform: 'translate3d(150%, 0, 0)' })),
    transition('in => out', animate('200ms ease-in')),
    transition('out => in', animate('200ms ease-out'))
]);


export const fade = trigger('fade', [
    state('visible', style({ opacity: 1 })),
    state('invisible', style({ opacity: 0.1 })),
    transition('visible <=> invisible', animate('2000ms linear'))
]);

export const flyIn = trigger( 'flyIn' , [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
            animate(500)
    ]),
    transition('* => void', [
        animate(100, style ({ transform: 'translateX(500%)'}))
    ])
]);

export const fadeOut = trigger('fadeOut', [
    state('invisible', style({ opacity: 0 })),
    transition('void => *' , [
        style({ opacity: 1 }),
            animate('1000ms linear')
    ]),
    transition('* => void', [
        animate('1000ms linear', style ({ opacity: 0 }))
    ])
]);