import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/service/auth.service';
import { Product } from 'src/app/model/product.model';
import { CART_KEY } from 'src/helpers/localStorage';

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
    private authService: AuthService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
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
    if (this.user) {
      let productstorage =
        JSON.parse(localStorage.getItem(CART_KEY + this.user?.id)!) || [];
      let abc = false;
      for (let i = 0; i < productstorage.length; ++i) {
        const c = productstorage[i];
        if (c.id === this.product.id) {
          productstorage[i].quantity += this.quantity;
          abc = true;
        }
      }
      if (!abc) {
        this.product.quantity = this.quantity;
        productstorage.push(this.product);
      }

      localStorage.setItem(
        CART_KEY + this.user?.id,
        JSON.stringify(productstorage)
      );

      this.toastrService.success(
        'The product ' + this.product.title + ' has been added to cart!',
        'Success!'
      );
    } else {
      this.router.navigate(['/signin'], { relativeTo: this.route });
    }
  }
}
