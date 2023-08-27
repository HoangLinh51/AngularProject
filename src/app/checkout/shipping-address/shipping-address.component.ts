import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/auth.model';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css'],
})
export class ShippingAddressComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  products: Product[] = [];
  loading = false;
  user: IUser | null;

  @Input() product!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
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
      totalAmount: [this.totalAmount(), Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  submitInfor() {
    if (this.form.valid) {
      const a =
        JSON.parse(localStorage.getItem('order' + this.user?.id)!) || [];
      const ifCheckout = this.form.value;
      ifCheckout.id = a.length
        ? Math.max(...a.map((x: { id: number }) => x.id)) + 1
        : 1;
      a.push(ifCheckout);
      localStorage.setItem('order' + this.user?.id, JSON.stringify(a));
      this.router.navigate(['/profile']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  getDataFrLocalStorage(): void {
    const key = 'cart' + this.user?.id;
    this.products = JSON.parse(localStorage.getItem(key)! || '[]');
    console.log('this.products', this.products, key);
  }

  totalAmount() {
    const cartItems = JSON.parse(
      localStorage.getItem('cart' + this.user?.id)! || '[]'
    );
    const totalAmounts = cartItems.reduce(
      (sum: number, product: { price: number; quantity: number }) =>
        sum + product.price * product.quantity,
      0
    );
    return totalAmounts;
  }
}
