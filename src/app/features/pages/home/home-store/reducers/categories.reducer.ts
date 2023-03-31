import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/core/interfaces/productCategories';
import {
  FetchProductCategories,
  FetchProductCategoriesFailure,
  FetchProductCategoriesSuccess,
} from '../actions/categories.actions';

interface CategoriesInitialState {
  categories: Category[];
}

export const initialState: CategoriesInitialState = {
  categories: [],
};

export const categoryReducer = createReducer(
  initialState,
  on(FetchProductCategories, (state) => ({ ...state, error: null })),
  on(FetchProductCategoriesSuccess, (state, actions) => ({
    ...state,
    categories: actions.categories,
    error: null,
  })),
  on(FetchProductCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
