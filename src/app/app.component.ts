import { state } from '@angular/animations';
import { Component } from '@angular/core';

import { fade, grow2, slide, animateList } from '../shared/animations';

import { colors } from '../shared/colors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade, slide, grow2(2000), animateList]
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
  colors = colors;
  //hide: boolean;
  state = false;

  // growToggle(state) {
  //   this.state = this.state === 'small' ? 'large' : 'small';
  // }

  // slideToggle(state) {
  //   this.state = this.state === 'in' ? 'out' : 'in';
  // }

  // fadeToggle(state) {
  //   this.state = this.state === 'visible' ? 'invisible' : 'visible';
  // }

  toggleState() {
    this.state = !this.state;
  }

}
