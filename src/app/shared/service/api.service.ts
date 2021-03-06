import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  like: Subject<boolean> = new Subject<boolean>(); 
  result: Subject<boolean> = new Subject<boolean>(); 
  constructor(private http: HttpClient) { }

  getAlbum(genre: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=22e5dcb7293a23da484afeacce80c247&format=json`);
  }

  searchMusic(search: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=22e5dcb7293a23da484afeacce80c247&format=json`);
  }
}
