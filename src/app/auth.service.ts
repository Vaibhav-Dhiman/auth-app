import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()

export class AuthService {
    constructor(private http: Http) {}
    BASE_URL = 'http://localhost:5544';

    register(user: any) {
        delete user.confirmPassword;
        return this.http.post(this.BASE_URL + '/register', user).subscribe();
    }
}