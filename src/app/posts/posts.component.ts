import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'this is the first post',
        body: 'hello this is the body',
        votes: 1
      },
      {
        id: 2,
        title: 'this is the second post',
        body: 'hello this is the body of second post',
        votes: 3
      }
    ]
  }
  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }
}
