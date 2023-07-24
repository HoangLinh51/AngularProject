import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../auth.model';
import { AuthService } from '../auth.service';
import { Order } from '../product.model';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
})
export class ProfileUserComponent {
  orders: Order[] = [];
  user: IUser | null;
  form!: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.user = this.authService.userValue;
    this.getUserLocalStorage();
    this.getDataFrLocalStorage();
    console.log(this.user);
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.user?.id],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: [this.user?.username],
      token: [this.user?.token],
    });
  }
  get f() {
    return this.form.controls;
  }
  getUserLocalStorage() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
  getDataFrLocalStorage(): void {
    this.orders = JSON.parse(
      localStorage.getItem('order' + this.user?.id)! || '[]'
    );
  }
  saveInfor() {
    this.getUserLocalStorage();
    const a = this.form.value;
    localStorage.setItem('user', JSON.stringify(a));
  }
}
