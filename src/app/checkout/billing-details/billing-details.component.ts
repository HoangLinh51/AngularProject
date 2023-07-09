import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Product } from 'src/app/product.model';

const key = 'infor-checkout';

@Component({
  selector: 'app-billing',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css'],
})
export class BillingDetailsComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  products: Product[] = [];
  loading = false;

  @Input() product!: any[];

  constructor(private formBuilder: FormBuilder) {
    this.getDataFrLocalStorage();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      country: ['', Validators.required],
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
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
  onSubmit() {
    JSON.parse(localStorage.getItem(key)!) || [];
    const ifCheckout = this.form.value;
    console.log('ifCheckout', ifCheckout);
    localStorage.setItem(key, JSON.stringify(ifCheckout));
  }
  getDataFrLocalStorage() {
    this.products = JSON.parse(localStorage.getItem('cart')!);
  }
  totalAmount() {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalAmounts = cartItems.reduce(
      (sum: number, product: { price: number; quantity: number }) =>
        sum + product.price * product.quantity,
      0
    );
    return totalAmounts;
  }
}
