import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PostNewComponent } from './post-new/post-new.component';
import { CreateNewPostComponent } from './post-remarkable/create-new-post/create-new-post.component';
import { PostRemarkableComponent } from './post-remarkable/post-remarkable.component';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PostNewComponent,
    PostRemarkableComponent,
    CreateNewPostComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [FormsModule],
})
export class PostModule {}
