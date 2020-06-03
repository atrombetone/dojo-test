import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { ProductModel } from './models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `${environment.apiUrl}/${environment.apiVVerion}/product`
  constructor(private _http: HttpClient) {
    
  }

  getProducts() : Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.url);
  }
}
