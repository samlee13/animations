import { Component, HostBinding } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
    selector: '[fadeInAnimation]',
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate(2000, style({ opacity: '1' })),
            ]),
        ]),
    ],
    template: `<ng-content></ng-content>`
})

export class FadeInDirective {
    @HostBinding('@fadeIn') trigger = ''
}