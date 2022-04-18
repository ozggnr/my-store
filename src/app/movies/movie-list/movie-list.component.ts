import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  name: string = 'Movies'
  firstone: string = 'LOTR'
  secondone: string = 'Batman'
  thirdone: string = 'IT'

  constructor() { }

  ngOnInit(): void {
  }

}
