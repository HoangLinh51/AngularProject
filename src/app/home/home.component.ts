import { Component } from '@angular/core';
import { IUser } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user: IUser | null;

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
    console.log(this.user);
  }
}
