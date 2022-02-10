import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { CommonService} from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, public common: CommonService) { }

    private catchError(error: Response | any) {
        console.log(error);
        this.common.toasting('Favor intentar más tarde...')
        return throwError("Server error.");
    }

    private logResponse(res: Response) {
        /* console.log(res); */
    }

    send(params, url) {
        params.api_token = localStorage.getItem('api_token');
        return this.http.get(this.common.api_url + url , { params: params}).pipe(
            tap(this.logResponse),
            map(res => res),
            catchError(this.catchError)
        );
    }
    sendCustom(params, url) {
        params.api_token = localStorage.getItem('api_token');
        return this.http.get( url , { params: params}).pipe(
            tap(this.logResponse),
            map(res => res),
            catchError(this.catchError)
        );
    }
    sendPost(params, url) {
        params.api_token = localStorage.getItem('api_token');
        
        return this.http.post( url, params ).pipe(
            tap(this.logResponse),
            map(res => res),
            catchError(this.catchError)
        );
    }
}
