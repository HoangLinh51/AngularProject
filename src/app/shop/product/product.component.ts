import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/auth.model';
import { AuthService } from 'src/app/auth.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  form!: FormGroup;
  user: IUser | null;

  @Input() productco: Product = new Product();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      product: [this.productco, Validators.required],
    });
    this.addToCart;
  }

  get f() {
    return this.form.controls;
  }

  addToCart() {
    let productstorage =
      JSON.parse(localStorage.getItem('cart' + this.user?.id)!) || [];
    const product = this.f.product.value;
    console.log('123', product);
    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === product.id) {
        productstorage[i].quantity += 1;
        abc = true;
      }
    }
    if (!abc) {
      product.quantity = 1;
      productstorage.push(product);
    }

    localStorage.setItem(
      'cart' + this.user?.id,
      JSON.stringify(productstorage)
    );
  }
}
