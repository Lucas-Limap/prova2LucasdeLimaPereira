import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private serverAPI = 'https://music-api-2022.herokuapp.com/categories/'

  constructor(private httpClient: HttpClient) { }

  postCategories (categories: Categories) : Observable<Categories> {
    return this.httpClient.post<Categories>(this.serverAPI, categories)
  }

  getCategoriesList () : Observable<Categories[]>{
    return this.httpClient.get<Categories[]>(this.serverAPI)
  }
}
