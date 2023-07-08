import { Component } from '@angular/core';
import { IUser } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user?: IUser | null;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
    // console.log('this.user--------', this.user);
  }

  logout() {
    this.authService.logout();
  }
}
