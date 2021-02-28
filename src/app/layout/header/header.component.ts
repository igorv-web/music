import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  result: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.apiService.searchMusic(this.result);
  }

}
