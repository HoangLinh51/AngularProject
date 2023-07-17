import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailComponent } from './profile-user/order-detail/order-detail.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/order/:id',
    component: OrderDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
