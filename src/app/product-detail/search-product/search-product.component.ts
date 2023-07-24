import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent {
  totalproduct: number = 0;
  page: number = 0;
  datas: Product[] = [];
  form!: FormGroup;
  submitted = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
    });
    console.log(this.form);
    this.getlist('', 1);
  }

  get f() {
    return this.form.controls;
  }

  getlist(keyword: string, page: number) {
    this.productService.searchProduct(keyword, page).subscribe((res: any) => {
      this.datas = res.products;
      this.totalproduct = res.total;
    });
  }
  search() {
    const keyword = this.f.search.value;
    this.page = 1;
    this.getlist(keyword, this.page);
    console.log(keyword);
  }
}
