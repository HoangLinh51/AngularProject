import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ORDER_KEY, USER_KEY } from 'src/helpers/localStorage';
import { IUser } from '../model/auth.model';
import { AuthService } from '../service/auth.service';
import { Order } from '../model/product.model';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
})
export class ProfileUserComponent {
  orders: Order[] = [];
  user: IUser | null;
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.user = this.authService.userValue;
    this.getDataFrLocalStorage();
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
  getDataFrLocalStorage(): void {
    this.orders = JSON.parse(
      localStorage.getItem(ORDER_KEY + this.user?.id)! || '[]'
    );
  }
  saveInfor() {
    this.user = JSON.parse(localStorage.getItem(USER_KEY)!);
    this.toastrService.success('Successful change', 'Success!');
    localStorage.setItem(USER_KEY, JSON.stringify(this.form.value));
  }
}
