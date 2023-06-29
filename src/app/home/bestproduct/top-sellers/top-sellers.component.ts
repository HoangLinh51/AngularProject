import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-top-sellers',
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.css'],
})
export class TopSellersComponent {
  productList: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll(0).subscribe((ps) => this.productList);
    // console.log(this.productList);
  }

  @Input() productco: Product = new Product();
}
