import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	@Input() post: Post
  //This will emit the data through to parent
  @Output() hidePost: EventEmitter<Post> = new EventEmitter
	constructor() {
		this.post = {
			id: 1,
			title: '',
			body: '',
			votes: 0
		}
	}

	ngOnInit(): void {}
  handleLike(post: Post): void { post.votes += 1 }
  handleDislike(post: Post): void { post.votes -= 1 }
  handleHide(post: Post): void { this.hidePost.emit(post) }
}
