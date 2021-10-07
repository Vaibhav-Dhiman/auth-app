import { Component } from '@angular/core';
import { webService } from './we.service';

@Component({
    selector: 'messages',
    template: ` 
    <div *ngFor="let m of messages">
        <mat-card style="margin: 8px;">
        <mat-card-title>{{m.owner}}</mat-card-title>
        <mat-card-content>
          {{m.text}}
        </mat-card-content>
            </mat-card>
        </div>`
})

export class MessageComponent {
    messages: any;
    constructor(private readonly webdata: webService) {}
    ngOnInit() {
    this.webdata.getmessages().subscribe(data => {
        console.log(data);
        this.messages = data;
    })
    }
}
