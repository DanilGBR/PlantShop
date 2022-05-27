import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articles: Article[] = [
    {
      edition: 1,
      author: 'Gabriel',
      title: 'Za best article in za world',
      image: '../../../assets/articles/how-to-grow-herbs.jpg',
    },
    {
      edition: 2,
      author: 'Teodora',
      title: 'Water thy plants slave',
      image: '../../../assets/articles/sweet-peppers-indors-growing.jpg',
    },
  ];

  constructor() {}

  public getArticles(): Observable<Article[]> {
    {
      return of(this.articles);
    }
  }
}
