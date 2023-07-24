import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/auth.model';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-decription-product',
  templateUrl: './decription-product.component.html',
  styleUrls: ['./decription-product.component.css'],
})
export class DecriptionProductComponent {
  form!: FormGroup;
  user: IUser | null;
  quantity: number = 1;

  @Input() product: Product = new Product();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      item: [this.product, Validators.required],
    });
    this.addToCart;
  }
  get f() {
    return this.form.controls;
  }

  addToCart() {
    // debugger;
    let productstorage =
      JSON.parse(localStorage.getItem('cart' + this.user?.id)!) || [];
    const a = this.product;
    const b = this.quantity;
    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === a.id) {
        productstorage[i].quantity += b;
        abc = true;
      }
    }
    if (!abc) {
      a.quantity = b;
      productstorage.push(a);
    }

    localStorage.setItem(
      'cart' + this.user?.id,
      JSON.stringify(productstorage)
    );
  }
}
