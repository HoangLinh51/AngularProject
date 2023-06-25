import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-decription-product',
  templateUrl: './decription-product.component.html',
  styleUrls: ['./decription-product.component.css'],
})
export class DecriptionProductComponent implements OnInit {
  id!: number;
  product!: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.productService.getProductById(Number(id)))
      )
      .subscribe((product: any) => (this.product = product));
    console.log('product@@@>', this.product);
    console.log('param----id--->', this.id);
  }
}
