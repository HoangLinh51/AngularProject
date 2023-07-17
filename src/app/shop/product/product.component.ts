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
  productList: Product[] = [];
  form!: FormGroup;
  user: IUser | null;

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

  @Input() productco: Product = new Product();

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  get f() {
    return this.form.controls;
  }
  addToCart() {
    // debugger;
    let productstorage =
      JSON.parse(localStorage.getItem('cart' + this.user?.id)!) || [];
    const product = this.f.product.value;

    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === product.id) {
        productstorage[i].quantity += 1;
        // console.log('product=-------', productstorage[i]);
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
