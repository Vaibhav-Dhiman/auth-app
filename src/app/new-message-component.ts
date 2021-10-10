import { Component } from '@angular/core';
import { webService } from './we.service';

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
        <mat-card-content>
        <mat-form-field class="example-full-width" appearance="legacy">
            <mat-label>User</mat-label>
            <input [(ngModel)]="message.owner" matInput  placeholder="Ex. Sam">
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="legacy">
            <mat-label>Message</mat-label>
            <textarea [(ngModel)]="message.text"matInput placeholder="Ex. Hello..."></textarea>
        </mat-form-field>
        <mat-card-actions>
        <button mat-button color="primary" (click)="submit()">Save</button>
    </mat-card-actions>
        </mat-card-content>
        </mat-card>
    `
})

export class NewMessageComponent {
    messages: any;
    constructor(private readonly webdata: webService) {}
    message  = {
        owner: "",
        text: ""
    }
    
    submit() {
        this.webdata.postMessage(this.message).subscribe(data=>{
            alert('Added');
        });
    }
}
