import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiUrl = 'https://dummyjson.com/carts/user/5';
  constructor(private httpClient: HttpClient) {}

  getAll() {
    console.log('this.apiUrlcart', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }
}
