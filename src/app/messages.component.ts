import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <md-card class="card">
            <md-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer;">{{message.owner}}</md-card-title>
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    </div>
    `
})
export class MessagesComponent {
    messages:any;
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.webService.getMessages(this.route.snapshot.params.name);
        this.webService.messageSubject.subscribe(msg => {
            this.messages = msg;
        });
    }   
}