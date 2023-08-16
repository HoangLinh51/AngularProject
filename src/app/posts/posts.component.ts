import { Component } from '@angular/core';
import { Posts } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  totalpost: number = 0;
  page: number = 0;
  post: Posts[] = [];

  constructor(private postService: PostService) {
    this.getAllPost();
  }

  ngOnInit() {}

  getAllPost() {
    this.postService.getAll(this.page).subscribe((res: any) => {
      this.post = res.posts;
      this.totalpost = res.total;
    });
  }
  renderPage(event: number) {
    this.page = event;
    this.getAllPost();
  }
}
