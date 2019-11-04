import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KanyeService {

    private baseUrl = 'https://api.kanye.rest';

    constructor(private http: HttpClient) {}

    public getQuote(): Observable<string> {
        return this.http.get(`${this.baseUrl}/?format=text`, {responseType: 'text'});
    }

}