import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  //dependency imported
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }
}
