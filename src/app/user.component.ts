import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'user',
    template: `
        <md-card class="card">
            <md-card-content>
                <md-input-container>
                    <input [(ngModel)]="model.firstName" mdInput placeholder="First Name">
                </md-input-container>
                <md-input-container>
                    <input [(ngModel)]="model.lastName" mdInput placeholder="Last Name">
                </md-input-container>
                <md-card-actions>
                    <button (click)="post()" md-button color="primary">Save Changes</button>
                </md-card-actions>
            </md-card-content>
        </md-card>
    `
})
export class UserComponent implements OnInit {
    constructor(private webService : WebService) {}
    model = {
        firstName: "",
        lastName: ""
    }

    ngOnInit() {
        this.webService.getUser().subscribe(data=> {
            this.model.firstName = data.firstName;
            this.model.lastName = data.lastName;
        });
    }

    post() {
        this.webService.saveUser(this.model).subscribe();
    }
}