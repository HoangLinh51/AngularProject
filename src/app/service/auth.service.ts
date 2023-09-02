import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../model/auth.model';
import { USER_KEY } from 'src/helpers/localStorage';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:4000';
  public isAuthorized = false;

  private userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem(USER_KEY)!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<IUser>(`${this.apiUrl}/signin`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(USER_KEY, JSON.stringify(user));
          this.userSubject.next(user);
          this.isAuthorized = true;
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(USER_KEY);
    this.userSubject.next(null);
    this.isAuthorized = false;
    this.router.navigate(['/signin']);
  }

  register(user: IUser) {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  getAll() {
    return this.http.get<IUser[]>(`${this.apiUrl}/users`);
  }
}
