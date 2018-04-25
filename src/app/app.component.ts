import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { animateList } from '../shared/animations';
import { colors } from '../shared/colors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animateList]

})
export class AppComponent {
  state = false;
  colors = colors;
}
