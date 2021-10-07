import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class webService {
    constructor(private readonly http: HttpClient) {}
    getmessages() {
        return this.http.get('http://localhost:5544/messages');
    }
}