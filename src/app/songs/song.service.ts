import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  searchSong(name: string) {
    const API_KEY = 'ade76921ac7d67ce93fda44b8574142b';
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${API_KEY}&format=json`;
    return this.httpClient.get(API_URL).toPromise();
  }
}
