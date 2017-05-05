import { Component } from '@angular/core';
import { fade } from '../../shared/animations';

@Component({
    selector: 'pages-contact',
    templateUrl: 'contact.html',
    styleUrls: ['./contact.css'],
    animations: [ fade ]
})

export class ConPage {
    state: string = 'visible';

    fade(state){
    console.log("it works3");
    this.state = (this.state === 'visible' ? 'invisible' : 'visible');
  }
}