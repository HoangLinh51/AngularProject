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
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll(0).subscribe((ps) => this.productList);
    // console.log(this.productList);
  }

  @Input() productco: Product = new Product();

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
