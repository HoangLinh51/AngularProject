import { Component } from '@angular/core';
import { IUser } from '../model/auth.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user: IUser | null;

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
  }
}
