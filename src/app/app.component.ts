import { Component } from '@angular/core';
import { grow, flyInOut, fade } from '../shared/animations';
import { HomePage , ConPage } from '../pages/pages';
import { state } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ flyInOut ]
})
export class AppComponent {

state: string = 'small';

    flyInOut(state){
    console.log("it works1");
    this.state = (this.state === 'in' ? 'out' : 'in');
    }
}
