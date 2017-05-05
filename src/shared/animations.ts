//hi alyssa!!!
//here are the animations!!!!!

//imports from @anguar/animations
import { trigger, transition, state, style, animate, keyframes }
        from '@angular/animations';

//grow function
export const grow = trigger('grow' , [
    //original size is small as seen below, 1 is the default size for the button.
    state('small', style({ transform: 'scale(1)' })),
    //"large" happens after you click it, the button will scale to 1.4
    state('large', style({ transform: 'scale(1.4)' })),
    //"animate" will take care of how long this will happen.
    //right now i have it at 200 ms, but that can be as long or as fast as you want it to be.
    //ease-in & ease-out just make it a smooth transition between in & out.
    transition('small => large', animate('200ms ease-in')),
    transition('large => small', animate('200ms ease-out'))
]);

//this is about the same as the grow button, but instead of growing, it moves side to side, or up and down.
export const flyInOut = trigger('flyInOut', [
    //when it moves "in" its in the default place (0, 0)
    //when it moves "in" there is no transformation.
    state('in', style({ transform: 'translate3d(0, 0, 0)' })),
    //moving "out", it is translated 150% to the right.
    //by adding a - in front of the 150%, it would move left.
    state('out', style({ transform: 'translate3d(150%, 0, 0)' })),
    //the "animate" part is the same as the grow button.
    transition('in => out', animate('200ms ease-in')),
    transition('out => in', animate('200ms ease-out'))
]);

//you're probably getting the hang of this now ;)
//fade button the same as the last 2, just opacity instead of scale or translate.
export const fade = trigger('fade', [
    //"visible" has an opacity of 1, 1 is the default.
    state('visible', style({ opacity: 1 })),
    //don't set opacity to 0 when dealing with buttons bc when you want to go back to visible, 
    //you won't be able to see the button at all so generally you want to stay at 0.1.
    //so the title "invisible" is actually slightly misleading... haha
    state('invisible', style({ opacity: 0.1 })),
    //"linear" just means it will be a smooth transition between visible and invisible.
    transition('visible <=> invisible', animate('2000ms linear'))
]);

//this function is a lot like "flyInOut" as you can see.
//the difference is this is a default animation which means there is no manual trigger.
//everytime the page is refreshed, the buttons will fly in.
export const flyIn = trigger( 'flyIn' , [
    //this is where the buttons start, out of sight.
    state('*', style({ transform: 'translateX(0)' })),
    //instead of in or out, void and * are used.
    //* means "in" in this case.
    transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
            //i made these pretty fast, the bigger the number, the slower the animations will be.
            animate(500)
    ]),
    transition('* => void', [
        animate(100, style ({ transform: 'translateX(500%)'}))
    ])
]);

//this function is not yet used in the program, but it is the same concept as flyIn
//the button will fade out, and then fade back in with no further prompting.
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