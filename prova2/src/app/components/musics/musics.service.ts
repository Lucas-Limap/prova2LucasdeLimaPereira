import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from './musics';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  private serviceAPI = 'https://music-api-2022.herokuapp.com/musics'

  constructor(private httpClient: HttpClient) { }

  postMusics(music: Music) : Observable<Music>{
    return this.httpClient.post<Music>(this.serviceAPI, music)
  }

  getMusics() : Observable <Music[]>{
    return this.httpClient.get<Music[]>(this.serviceAPI)

  }


}
