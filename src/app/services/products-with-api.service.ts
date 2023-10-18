import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpClient:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/products')
    return this.httpClient.get<Iproduct[]>(`${environment.BaseApiUrl}/products`)
    .pipe(
      retry(3),
      catchError((err)=>{
        return throwError(()=>{
          // return new Error(err)
          return new Error("error while getting products")
        })
      })
    )
  }
  getProductById(productId:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.BaseApiUrl}/products/${productId}`)
    .pipe(
      retry(3),
      catchError((err)=>{
        return throwError(()=>{
          // return new Error(err)
          return new Error("error while getting the product")
        })
      })
    )
  }



  deleteProductById(productId:number):Observable<Iproduct>{
    return this.httpClient.delete<Iproduct>(`${environment.BaseApiUrl}/products/${productId}`)

  }



  updateProduct(productId: number, updatedProduct: Iproduct): Observable<Iproduct> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.put<Iproduct>(`${environment.BaseApiUrl}/products/${productId}`, updatedProduct, httpOptions)
      .pipe(
        catchError((err) => {
          return throwError(() => {
            return new Error("error while updating the product");
          });
        })
      );
  }




  //query string

  searchWithPrice(price:string):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.BaseApiUrl}/products?price=${price}`)
  }



  //by category

  getProdsByCatId(catId:string):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.BaseApiUrl}/products?categoryID=${catId}`)
  }


}




