import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthapiService {

  private apiURL = "http://127.0.0.1:8000/api/";
 

  private API_enviorment = 'test';

  constructor(public router:Router,public http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  callapi(requestUrl, requestParams, requestType) : Observable <any> {

    let headers = new HttpHeaders();
    if(localStorage.getItem('access_token') != null){
        headers = headers.append('Authorization', 'Bearer ' +  localStorage.getItem('access_token'));
        headers = headers.append('Content-Type', 'application/json');
    } else {
      //  headers = headers.append('Content-Type', 'application/json');
    }

    let apiURLCall = this.apiURL + requestUrl;

    if (requestType == 'GET') {
      // let rand = Math.random();
      return this.http.get<any>(apiURLCall, { headers: headers })
        .pipe(
          map(res => {
            return res
          }),
          catchError(this.errorHandler)
        );
    }

    if (requestType == 'POST') {
      return this.http.post<any>(apiURLCall, requestParams, { headers: headers })
        .pipe(
          map(res => {
            return res
          }),
        catchError(this.errorHandler)
        );
    }
    if (requestType == 'DELETE') {
      return this.http.delete<any>(apiURLCall, { headers: headers })
        .pipe(
          map(res => {
           // this.apphelper.dismissLoader()
            return res
          }),
          catchError(this.errorHandler)
        );
    }
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}


