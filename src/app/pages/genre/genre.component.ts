import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  isLiked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addFavourite(): void {
    this.isLiked = !this.isLiked;
  }

}
