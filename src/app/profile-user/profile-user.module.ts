import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';

import { ProfileUserComponent } from './profile-user.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [ProfileUserComponent, OrderDetailComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [FormsModule],
})
export class ProfileModule {}
