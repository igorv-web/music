import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '22e5dcb7293a23da484afeacce80c247';

  constructor(private http: HttpClient) { }

  getMusic(genre: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${this.apiKey}&format=json`);
  }

  searchMusic(search: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${this.apiKey}&format=json`)
  }
}
