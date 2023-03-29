import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/interfaces/article';
import { FetchArticles } from '../actions/articles.actions';

@Injectable({ providedIn: 'root' })
export class ArticlesStoreService {
  constructor(private store: Store) {}

  public fetchArticles(): void {
    this.store.dispatch(FetchArticles());
  }

  public selectArticles(): Observable<Article[]> {
    return this.store.pipe(
      select((state: any) => {
        return state.articles.articles;
      })
    );
  }
}
