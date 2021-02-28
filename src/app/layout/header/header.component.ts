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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    if(this.ask != '') {
      this.apiService.searchMusic(this.ask).subscribe(
        (data) => {
          this.result = data;
        },
        (err) => console.log(err)
      );
    }
  }

}
