import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpHeader={}
  constructor(private httpClient:HttpClient) {
    this.httpHeader={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   }

  signUpUsers(user:Iuser):Observable<Iuser>{
    return this.httpClient.post<Iuser>(`${environment.BaseApiUrl}/users`,JSON.stringify(user),this.httpHeader)
    .pipe(
      retry(3),
      catchError((err)=>{
        return throwError(()=>{
          // return new Error(err)
          return new Error("error while signing up")
        })
      })
    )
  }
}
