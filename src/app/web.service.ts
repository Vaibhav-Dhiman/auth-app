import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:5544';

    private messages = [];
    messageSubject  = new Subject();


    constructor(private http: Http, private sb : MdSnackBar, private authService: AuthService) {
       // this.getMessages();
    }

    getMessages(user: any) {
            user = (user) ? '/' + user: '';
           this.http.get(this.BASE_URL + '/messages' + user).subscribe(data =>{
                this.messages = data.json();
                this.messageSubject.next(this.messages);
            }, error => {
                this.handleError("Unable to get messages");
            });
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

    getUser() {
        return this.http.get(this.BASE_URL + '/user/me', this.authService.tokenHeader).map(res => res.json());
    }

    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/user/me',userData, this.authService.tokenHeader).map(res => res.json());
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
    }
}