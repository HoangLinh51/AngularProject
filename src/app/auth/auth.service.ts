import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './auth.model';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:4000';

  private userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
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
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          console.log('user', localStorage);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/signin']);
  }

  register(user: IUser) {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  getAll() {
    return this.http.get<IUser[]>(`${this.apiUrl}/users`);
  }

  // getById(id: string) {
  //   return this.http.get<IUser>(`${this.apiLogin}/users/${id}`);
  // }

  // update(id: string, params: any) {
  //   return this.http.put(`${this.apiLogin}/users/${id}`, params).pipe(
  //     map((x) => {
  //       // update stored user if the logged in user updated their own record
  //       if (id == this.userValue?.id) {
  //         // update local storage
  //         const user = { ...this.userValue, ...params };
  //         localStorage.setItem('user', JSON.stringify(user));

  //         // publish updated user to subscribers
  //         this.userSubject.next(user);
  //       }
  //       return x;
  //     })
  //   );
  // }

  // delete(id: string) {
  //   return this.http.delete(`${this.apiLogin}/users/${id}`).pipe(
  //     map((x) => {
  //       // auto logout if the logged in user deleted their own record
  //       if (id == this.userValue?.id) {
  //         this.logout();
  //       }
  //       return x;
  //     })
  //   );
  // }
}
