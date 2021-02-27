import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  albums: Object;
  isLiked: boolean = false;
  like: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums(): void {
    this.apiService.getAlbum().subscribe(
      (data) => {
        this.albums = data;
        console.log(this.albums);
      },
      (err) => console.log(err)
    )
  }

  addFavourite(): void {
    this.isLiked = !this.isLiked;
    // this.like = this.like + 1;
    // console.log(this.like);
    // localStorage.setItem('like', this.like)
  }

}
