import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewProductsService {
  httpHeader={}
  constructor(private httpClient:HttpClient) {
      this.httpHeader={
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
   }
   insertProduct(product:Iproduct):Observable<Iproduct>{
      return this.httpClient.post<Iproduct>(`${environment.BaseApiUrl}/products`,JSON.stringify(product),this.httpHeader)
   }


}


