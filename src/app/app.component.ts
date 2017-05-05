import { Component } from '@angular/core';
import { grow, flyInOut, fade, flyIn, fadeOut } from '../shared/animations';
import { HomePage , ConPage } from '../pages/pages';
import { state } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ flyInOut , fade, flyIn, fadeOut ]
})
export class AppComponent {
state: string = 'small';

    flyInOut(state){
    console.log("it works1");
    this.state = (this.state === 'in' ? 'out' : 'in');
  }
  
    fade(state){
    console.log("it works3");
    this.state = (this.state === 'visible' ? 'invisible' : 'visible');
  }

    flyIn(state){
      this.state = (this.state === '*' ? 'void' : '*');
    }

    fadeOut(state){
      this.state = (this.state === '*' ? 'void' : '*');
    }
}
