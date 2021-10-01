import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `this is a paragraph template 
    <button mat-button color="primary">Primary</button>
    <div *ngFor="let m of messages">{{m.text}}</div>`
})

export class MessageComponent {
    messages: any[] = [
        {
            text: 'i am the text',
            owner: 'Vaibhav'
        },
        {
            text: 'i am the another text',
            owner: 'Sanju'
        }
    ];

}
