import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Article } from 'src/app/core/interfaces/article';
import { ArticlesService } from 'src/app/core/services/articles.service';
import * as ArticleActions from '../actions/articles.actions';

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}

  selectCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.FetchArticles),
      switchMap(() =>
        this.articlesService.getArticles().pipe(
          map((response: { articles: Article[] }) =>
            ArticleActions.FetchArticlesSuccess(response)
          ),
          catchError((error: any) =>
            of(ArticleActions.FetchArticlesFailure(error))
          )
        )
      )
    )
  );
}
