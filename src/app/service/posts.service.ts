import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from '../model/post.model';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts!: Posts;
  apiUrl = 'https://dummyjson.com/posts';
  constructor(private httpClient: HttpClient) {}

  getAll(page: number, pagesize = 5) {
    var skip = (page - 1) * pagesize;
    const a = this.apiUrl + `?limit=${pagesize}` + `&skip=${skip}`;
    return this.httpClient.get(a);
  }

  getProductById(id: number) {
    const i = this.apiUrl + '/' + id;
    return this.httpClient.get(i);
  }
  searchPost(search: string, page: number, pagesize = 5) {
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
