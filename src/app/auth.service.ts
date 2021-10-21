import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from '@angular/router';


@Injectable()

export class AuthService {
    constructor(private http: Http, private router: Router) {}

    BASE_URL = 'http://localhost:5544';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            this.authenticate(res);

        });
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }

    login(logindata) {
        this.http.post(this.BASE_URL + '/login', logindata).subscribe(res => {
            this.authenticate(res);
      });
    }

    authenticate(res) {
        localStorage.setItem(this.TOKEN_KEY, res.json().token)
        localStorage.setItem(this.NAME_KEY, res.json().firstName)
        this.router.navigate(['/']);
    }
}