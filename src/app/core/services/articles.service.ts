import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articles: Article[] = [
    {
      id: 1,
      edition: 1,
      author: 'Gabriel',
      title: 'Za best article in za world',
    },
    {
      id: 2,
      edition: 2,
      author: 'Teodora',
      title: 'Water thy plants slave',
    },
  ];

  constructor() {}

  public getArticles(): Observable<Article[]> {
    {
      return of(this.articles);
    }
  }
}
