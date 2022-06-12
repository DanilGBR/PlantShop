import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../interfaces/article';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private _api: ApiService) {}

  public getArticles(): Observable<{ message: string; articles: Article[] }> {
    {
      return this._api.get('articles');
    }
  }
}
