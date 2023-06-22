import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../auth.modul';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  user: IUser[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((ps) => this.user);
  }

  // @Input() auser: IUser = new IUser();
}
