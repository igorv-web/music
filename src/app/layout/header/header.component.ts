import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  likedAlbums: Array<any>;
  ask: string;
  result: any;
  likeCount: number = parseInt(localStorage.getItem('like'));
  searching: boolean = false;
  like: number = 0;
  ralb: Array<any> = [];
  album: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.checkLike();
  }

  checkLike(): void {
    this.apiService.like.subscribe(
      () => {
        this.getLikes();
      }
    )
  }

  checkSearch(): void {
    this.apiService.result.subscribe(
      () => {
        this.search();
      }
    )
  }

  getLikes(): void {
    this.likeCount = parseInt(localStorage.getItem('like'));
  }

  search(): void {
    this.apiService.result.next(true);
    if(this.ask.length >= 3) {
      this.searching = true;
    } else if(!this.ask) {
      this.searching = false;
    }
    this.apiService.searchMusic(this.ask).subscribe(
      (data) => {
        this.album = data;
      },
      (err) => console.log(err)
    );
  }

  addFavourite(alb): void {
    this.like = parseInt(localStorage.getItem('like'));
    alb.isLiked = !alb.isLiked;
    if(alb.isLiked) {
      this.like = this.like + 1;
    } else {
      if(this.like >= 1) {
        this.like = this.like - 1;
      }
    }
    localStorage.setItem('like', JSON.stringify(this.like));
    this.apiService.like.next(true);
  }
}
