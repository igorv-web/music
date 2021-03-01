import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  albums: any;
  isLiked: boolean = false;
  like: number = 0;
  activeLink: string;
  activeLike: boolean;
  likeNumber: number;
  results: any;
  name: string;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlbums(this.route.snapshot.paramMap.get('genre'));
  }

  private getAlbums(genreName: string): void {
    this.apiService.getAlbum(genreName).subscribe(
      (data) => {
        this.albums = data;
      },
      (err) => console.log(err)
    )
  }

  addFavourite(alb): void {
    this.like = parseInt(localStorage.getItem('like'));
    alb.isLiked = !alb.isLiked;
    let likedName: Array<string>;
    if(localStorage.getItem('albums') == this.albums?.albums.album.name) {
      alb.isLiksed = true;
    }
    if(alb.isLiked) {
      this.like = this.like + 1;
      this.name = alb.name;
      likedName.push(this.name);
      localStorage.setItem('albums', JSON.stringify(likedName));
    } else {
      if(this.like >= 1) {
        this.like = this.like - 1;
        let indexLike = likedName.indexOf(alb.name);
        likedName.splice(indexLike);
        localStorage.removeItem(this.name);
      }
    }
    localStorage.setItem('like', JSON.stringify(this.like));
    this.apiService.like.next(true);
  }

}
