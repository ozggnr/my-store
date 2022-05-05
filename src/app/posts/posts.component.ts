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
  constructor(private postService: PostService) { } // --> called for the first time before ngoninit to initialize the class

  ngOnInit(): void { //--> called after constructor and after the first ngonchanges
    this.postService.getPosts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post["votes"] = 1;
      }

      this.posts = res;
    })
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }
}
