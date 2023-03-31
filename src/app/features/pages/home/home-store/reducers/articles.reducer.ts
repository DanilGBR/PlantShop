import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/core/interfaces/article';
import {
  FetchArticles,
  FetchArticlesFailure,
  FetchArticlesSuccess,
} from '../actions/articles.actions';

interface ArticlesInitialState {
  articles: Article[];
}

export const initialState: ArticlesInitialState = {
  articles: [],
};

export const articlesReducer = createReducer(
  initialState,
  on(FetchArticles, (state) => ({ ...state, error: null })),
  on(FetchArticlesSuccess, (state, actions) => ({
    ...state,
    articles: actions.articles,
    error: null,
  })),
  on(FetchArticlesFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
