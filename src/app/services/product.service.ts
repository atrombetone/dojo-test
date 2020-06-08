import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ProductModel } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `${environment.apiUrl}/${environment.apiVVerion}/product`
  
  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.url);
  }
}
