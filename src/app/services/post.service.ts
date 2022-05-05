import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//with root injector, service being registered to the app and this makes the service available anywhere in app
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> { //--> gives us access to a stream of data returned from api
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/comments')
    // return [
    //   {
    //     id: 1,
    //     title: 'this is the first post',
    //     body: 'hello this is the body',
    //     votes: 1
    //   },
    //   {
    //     id: 2,
    //     title: 'this is the second post',
    //     body: 'hello this is the body of second post',
    //     votes: 3
    //   }
    // ]
  }
}
