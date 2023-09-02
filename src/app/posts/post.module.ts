import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CreateNewPostComponent } from './post-remarkable/create-new-post/create-new-post.component';
import { PostRemarkableComponent } from './post-remarkable/post-remarkable.component';
import { PostsComponent } from './posts.component';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import en from '@angular/common/locales/en';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '../model/post.model';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { LibModule } from '../lib/lib.module';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    PostRemarkableComponent,
    CreateNewPostComponent,
    PostsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    LibModule,
  ],
  bootstrap: [],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [FormsModule],
})
export class PostModule {}
