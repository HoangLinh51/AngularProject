import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';

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
    return this.httpClient.get(i);
  }

  getProductByCategory(category: string) {
    const c = this.apiUrl + '/category/' + category;
    return this.httpClient.get(c);
  }
  searchProduct(search: string, page: number, pagesize = 12) {
    var skip = (page - 1) * pagesize;
    const s =
      this.apiUrl +
      '/search?q=' +
      search +
      `&limit=${pagesize}` +
      `&skip=${skip}`;
    return this.httpClient.get(s);
  }
}
