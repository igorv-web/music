import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ask: string;
  result: any;
  likeCount: number = parseInt(localStorage.getItem('like'));
  searching: boolean = false;
  results: any;
  like: number = 0;
  name: string;

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
    if(this.ask) {
      this.searching = true;
      this.apiService.searchMusic(this.ask).subscribe(
        (data) => {
          this.result = data;
        },
        (err) => console.log(err)
      );
    } else if(!this.ask) {
      this.searching = false;
    }
    this.apiService.result.next(true);
    console.log(this.result);
  }

  addFavourite(alb): void {
    this.like = parseInt(localStorage.getItem('like'));
    alb.isLiked = !alb.isLiked;
    let likedName = [alb.name];
    if(localStorage.getItem('albums') == this.results?.albummatches.album.name) {
      alb.isLiksed = true;
    }
    if(alb.isLiked) {
      this.like = this.like + 1;
      this.name = alb.name;
      likedName.push(this.name)
      localStorage.setItem('albums', JSON.stringify(likedName));
    } else {
      if(this.like >= 1) {
        this.like = this.like - 1;
        localStorage.removeItem(this.name);
      }
    }
    localStorage.setItem('like', JSON.stringify(this.like));
    this.apiService.like.next(true);
  }
}
