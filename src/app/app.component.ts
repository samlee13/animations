import { Component } from '@angular/core';
//importing animations from other file.
import { grow, flyInOut, fade, flyIn, fadeOut } from '../shared/animations';
import { HomePage , ConPage } from '../pages/pages';
import { state } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //you can just put all the animations in this array, but just importing them is much prettier.
  animations: [ flyInOut , fade, flyIn, fadeOut ]
})
export class AppComponent {
//this line of code is crucial. nothing will work without this.
//the string could be anything, it just has to be equal to a string.
state: string = 'sam';

    flyInOut(state){
    console.log("it works1");
    //"if it's in, go out, otherwise, go in."
    //? means go out
    //: means otherwise, go in.
    this.state = (this.state === 'in' ? 'out' : 'in');
  }
  
    fade(state){
    console.log("it works3");
    //the same principle applies to all the rest.
    this.state = (this.state === 'visible' ? 'invisible' : 'visible');
  }

    flyIn(state){
      this.state = (this.state === '*' ? 'void' : '*');
    }

    fadeOut(state){
      this.state = (this.state === '*' ? 'void' : '*');
    }
}
