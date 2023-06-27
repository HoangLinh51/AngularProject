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
  filter(arg0: (params: any) => any) {
    throw new Error('Method not implemented.');
  }
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
    return this.httpClient.get(i);
  }

  getProductByCategory(category: string) {
    const c = this.apiUrl + '/category/' + category;
    // console.log('c', c);
    return this.httpClient.get(c);
  }
}
