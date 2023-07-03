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
    let productsotrage = JSON.parse(localStorage.getItem(key)!) || [];
    const product = this.f.product.value;
    const a = productsotrage.push(product);
    // console.log('productsotrage', productsotrage);
    // console.log('a', a);
    localStorage.setItem(key, JSON.stringify(productsotrage));
  }
}
