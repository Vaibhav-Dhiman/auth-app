import { Component } from '@angular/core';
import { webService } from './we.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'messages',
    template: ` 
    <div *ngFor="let m of messages">
        <mat-card class="card">
        <mat-card-title>{{m.owner}}</mat-card-title>
        <mat-card-content>
          {{m.text}}
        </mat-card-content>
            </mat-card>
        </div>`
})

export class MessageComponent {
    messages: any;
    constructor(private readonly webdata: webService,
        private _snackBar: MatSnackBar) {}


    openSnackBar() {
      this._snackBar.open("Data Not Found", "Failed", {
      duration: 3 * 1000,
       });
    }

    ngOnInit() {
    this.webdata.getmessages().subscribe( data => {
        console.log(data);
        this.messages = data;
    }, error => {
        this.openSnackBar();
    })
    }
}
