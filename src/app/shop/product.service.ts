import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product!: Product;
  apiUrl = 'https://dummyjson.com/products';
  constructor(private httpClient: HttpClient) {}

  getAll(page: number, pagesize = 12) {
    var skip = (page - 1) * pagesize;
    const a = this.apiUrl + `?limit=${pagesize}` + `&skip=${skip}`;
    return this.httpClient.get(a);
  }

  getProductById(id: number) {
    const i = this.apiUrl + '/' + id;
    console.log('i------>', i);
    return this.httpClient.get(i);
  }

  // getAll(): Observable<IProductList> {
  //   this.apiUrl = this.apiUrl + `?limit=${12}&skip=${0}`;
  //   return this.httpClient.get<IProductList>(this.apiUrl).pipe();
  // }
}
