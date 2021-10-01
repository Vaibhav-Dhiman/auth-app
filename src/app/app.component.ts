import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
@Component({
  selector: 'app-root',
  template: '<h1>Hello {{title}}</h1>  <messages>   ',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-fe';
}
