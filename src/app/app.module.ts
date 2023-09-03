import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModeule } from './checkout/checkout.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ProfileModule } from './profile-user/profile-user.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { PostModule } from './posts/post.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootertopComponent } from './footertop/footertop.component';
import { FooterbottomComponent } from './footerbottom/footerbottom.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';

import { fakeBackendProvider } from './fake-backend';
import { environment } from 'src/environment/environment';
import { LibModule } from './lib/lib.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  imports: [
    LibModule,
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
    PostModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
    }),
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
  providers: [fakeBackendProvider, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LibModule],
})
export class AppModule {}
