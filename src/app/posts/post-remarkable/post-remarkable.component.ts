import { Component } from '@angular/core';
import { PostNew } from '../../model/post.model';

@Component({
  selector: 'app-post-remarkable',
  templateUrl: './post-remarkable.component.html',
  styleUrls: ['./post-remarkable.component.css'],
})
export class PostRemarkableComponent {
  postNew: PostNew[] = [];

  constructor() {}
  ngOnInit() {
    this.getListPost();
  }

  getListPost(): void {
    this.postNew = JSON.parse(localStorage.getItem('post')!);
  }
}
