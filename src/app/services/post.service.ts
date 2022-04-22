import { Injectable } from '@angular/core';
//with root injector, service being registered to the app and this makes the service available anywhere in app
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return [
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
}
