import { Component } from '@angular/core';
import { grow, flyInOut, fade } from '../shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ grow, flyInOut, fade ]
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
