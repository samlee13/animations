import { state } from '@angular/animations';
import { Component } from '@angular/core';

import { autoAnimate, fade, grow, slide } from '../shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade, slide, grow, autoAnimate]
  // animations: [
  //   trigger('grow' , [
  //   state('small', style({ transform: 'scale(1)' })),
  //   state('large', style({ transform: 'scale(1.4)' })),
  //   transition('small => large', animate('200ms ease-in')),
  //   transition('large => small', animate('200ms ease-out'))
  //   ]),
  // ]
})
export class AppComponent {
  state: string;
  hide: boolean;

  growToggle(state) {
    this.state = this.state === 'small' ? 'large' : 'small';
  }

  slideToggle(state) {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

  fadeToggle(state) {
    this.state = this.state === 'visible' ? 'invisible' : 'visible';
  }

  invincibleToggle(state) {
    this.state = this.state === 'no' ? 'yes' : 'no';
  }

  // toggle(){
  //   this.hide = this.hide ? false : true;
  // }
}
