import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/service/auth.service';
import { Product } from 'src/app/model/product.model';
import { CART_KEY, ORDER_KEY } from 'src/helpers/localStorage';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css'],
})
export class ShippingAddressComponent implements OnInit {
  form!: FormGroup;
  products: Product[] = [];
  user: IUser | null;
  date = new Date();
  total!: number;
  priceShipping = 10;

  @Input() product!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.user = this.authService.userValue;
    this.getDataFrLocalStorage();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      country: ['', Validators.required],
      name: new FormControl('', [Validators.required]),
      address: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      payment: ['', Validators.required],
      product: [this.products, Validators.required],
      date: [this.date],
      totalAmount: [this.totalAmount(), Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  submitInfor() {
    if (this.form.valid) {
      const a =
        JSON.parse(localStorage.getItem(ORDER_KEY + this.user?.id)!) || [];
      const ifCheckout = this.form.value;
      ifCheckout.id = a.length
        ? Math.max(...a.map((x: { id: number }) => x.id)) + 1
        : 1;
      a.push(ifCheckout);
      localStorage.setItem(ORDER_KEY + this.user?.id, JSON.stringify(a));
      this.router.navigate(['/profile']);
      this.toastrService.success('Successful Order', 'Success!');
    } else {
      this.toastrService.error(
        'Please fill out the information completely',
        'Error!'
      );
      this.form.markAllAsTouched();
    }
  }

  getDataFrLocalStorage(): void {
    const key = CART_KEY + this.user?.id;
    this.products = JSON.parse(localStorage.getItem(key)! || '[]');
  }

  totalAmount() {
    const cartItems = JSON.parse(
      localStorage.getItem(CART_KEY + this.user?.id)! || '[]'
    );
    this.total = cartItems.reduce(
      (sum: number, product: { price: number; quantity: number }) =>
        sum + product.price * product.quantity,
      0
    );
    return this.total;
  }
}
