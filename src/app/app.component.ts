import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { NewMessageComponent } from './new-message-component';
@Component({
  selector: 'app-root',
  template: `<h1>Message Board</h1>
              <new-message>
              </new-message>
              <messages>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-fe';
}
