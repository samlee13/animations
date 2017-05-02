import { Component } from '@angular/core';
import { grow, flyInOut, fade } from '../../shared/animations';

@Component({
    selector: 'pages-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css'],
    animations: [ grow, flyInOut, fade ]
})

export class HomePage {
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