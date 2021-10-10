import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class webService {
    constructor(private readonly http: HttpClient) {}
    url = 'http://localhost:5544/messages';

    getmessages() {
        return this.http.get(this.url);
    }

    postMessage(message: any) {
        return this.http.post(this.url, message);
    }
}