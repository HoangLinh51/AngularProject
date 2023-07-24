import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { IUser } from 'src/app/auth.model';
import { AuthService } from 'src/app/auth.service';
import { Order, Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent {
  user: IUser | null;
  orders: Order = new Order();
  products!: Product[];

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(async (id) => this.getOrderById(Number(id)))
      )
      .subscribe((order: any) => {
        this.orders = order;
      });
  }

  getOrderById(id: number) {
    const orders: Order[] =
      JSON.parse(localStorage.getItem('order' + this.user?.id)!) || [];
    const order = orders.find((o: Order) => o.id === id);
    console.log('order.product', order?.product);
    return order;
  }
}
