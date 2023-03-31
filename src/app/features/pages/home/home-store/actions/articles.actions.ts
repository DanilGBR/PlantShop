import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/core/interfaces/article';

export const FetchArticles = createAction('[Articles] Fetch Articles');

export const FetchArticlesSuccess = createAction(
  '[Articles] Fetch Articles Success',
  props<{ articles: Article[] }>()
);

export const FetchArticlesFailure = createAction(
  '[Articles] Fetch Articles Failure',
  props<{ error: any }>()
);
