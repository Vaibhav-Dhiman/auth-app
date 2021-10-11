import { Component, ViewChild } from '@angular/core';
import { MessageComponent } from './message.component';
import { NewMessageComponent } from './new-message-component';
@Component({
  selector: 'app-root',
  template: `<h1>Message Board</h1>
              <new-message (onPosted)="onPosted($event)">
              </new-message>
              <messages>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessageComponent) messages!: MessageComponent;

   onPosted(message: any) {
     this.messages.messages.push(message);
   }
}
