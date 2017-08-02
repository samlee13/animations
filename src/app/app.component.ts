import { Component } from '@angular/core';
//importing animations from other file.
import { grow, fade, flyInOut } from '../shared/animations';
//import { state } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //you can just put all the animations in this array, but just importing them is much prettier.
  animations: [ fade, flyInOut, grow ]
})
export class AppComponent {
    state: string = 'small';

  grow(state){
    console.log("it works");
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


  flyInOut(state){
    console.log("it works1");
    this.state = (this.state === 'in' ? 'out' : 'in');
  }


  fade(state){
    console.log("it works3");
    this.state = (this.state === 'visible' ? 'invisible' : 'visible');
  }
}
