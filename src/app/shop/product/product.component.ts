import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  constructor() {}

  ngOnInit(): void {}

  @Input() productco: Product = new Product();

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
