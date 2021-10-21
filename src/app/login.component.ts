import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
    selector: 'login',
    template: `
    <md-card>
        <md-input-container>
            <input style="width: 300px;" [(ngModel)] = "loginData.email" mdInput placeholder="Email">
        </md-input-container>
        <md-input-container>
            <input style="width: 300px;" [(ngModel)] = "loginData.password" mdInput placeholder="Password" type="password">
        </md-input-container>
    
        <button md-raised-button color="primary" (click)="login()">Register</button>

    </md-card>

    `
})

export class LoginComponent {
    constructor(private authService: AuthService) {}

    loginData = {
        email: '',
        password: ''
    }

    login() {
        this.authService.login(this.loginData);
    }
}