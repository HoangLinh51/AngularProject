import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../product.model';

const key = 'cart';
// let productsotrage = JSON.parse(localStorage.getItem(key)!) || [];
// let products = JSON.parse(localStorage.getItem(key)!);

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
    let productstorage = JSON.parse(localStorage.getItem(key)!) || [];
    const product = this.f.product.value;

    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === product.id) {
        productstorage[i].quantity += 1;
        console.log('product=-------', productstorage[i]);
        abc = true;
      }
    }
    if (!abc) {
      product.quantity = 1;
      productstorage.push(product);
    }

    localStorage.setItem(key, JSON.stringify(productstorage));
  }
}
