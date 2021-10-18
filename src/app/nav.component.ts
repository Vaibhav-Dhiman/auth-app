import { Component } from '@angular/core'
import { AuthService } from './auth.service'


@Component({
    selector: 'nav',
    template: `
        <md-toolbar color="primary">
            <button md-button routerLink="/" >Message Board</button>
            <button md-button routerLink="/messages" >Messages</button>
            <span style="flex: 1 1 auto"></span>
            <button md-button routerLink="/register" >Register</button>
            <button *ngIf = "authService.isAuthenticated" md-button>Welcome {{ authService.name }}</button>
        </md-toolbar>
    `
})
export class NavComponent {
    constructor(private authService: AuthService) {}
}