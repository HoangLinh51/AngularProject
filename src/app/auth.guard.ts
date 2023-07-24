import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from './auth.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public isAuthorized = false;
  user?: IUser | null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user === null) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
