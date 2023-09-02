import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-bestproduct',
  templateUrl: './bestproduct.component.html',
  styleUrls: ['./bestproduct.component.css'],
})
export class BestproductComponent {
  pagination: number = 3;
  datas: Product[] = [];
  form!: FormGroup;
  pagesize: number = 3;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getAllproduct();
  }
  getAllproduct() {
    this.productService
      .searchProduct('', this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
      });
  }
}
