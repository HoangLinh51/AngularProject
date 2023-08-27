import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootertopComponent } from './footertop/footertop.component';
import { FooterbottomComponent } from './footerbottom/footerbottom.component';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModeule } from './checkout/checkout.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { fakeBackendProvider } from './fake-backend';
import { RouterModule } from '@angular/router';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProfileModule } from './profile-user/profile-user.module';
import { MaterialModule } from './material-module';
import { PostModule } from './posts/post.module';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environment/environment';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ShopModule,
    CartModule,
    CheckoutModeule,
    AuthRoutingModule,
    ProductDetailModule,
    ProfileModule,
    MaterialModule,
    PostModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FootertopComponent,
    FooterbottomComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    ContactComponent,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
