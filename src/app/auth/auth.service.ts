import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './auth.modul';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: IUser;
  apiUrl = 'https://dummyjson.com/auth/login';
  constructor(private httpClient: HttpClient) {}

  getUser() {
    const t = this.apiUrl;
    console.log('apiurltoken------>', this.apiUrl);
    return this.httpClient.get(t);
  }
}
