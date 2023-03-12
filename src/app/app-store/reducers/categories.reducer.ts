import { createReducer, on } from '@ngrx/store';
import {
  CategoriesArray,
  Category,
} from 'src/app/core/interfaces/productCategories';
import {
  FetchProductCategories,
  FetchProductCategoriesFailure,
  FetchProductCategoriesSuccess,
} from '../actions/categories.actions';

interface ProductCategoryInitialState {
  categories: Category[];
  // error: string;
  // category
  // numbersof
  // filters
}

export const initialState: ProductCategoryInitialState = {
  categories: [],
};

export const categoryReducer = createReducer(
  initialState,
  on(FetchProductCategories, (state) => ({ ...state, error: null })),
  on(FetchProductCategoriesSuccess, (state) => ({ ...state })),
  on(FetchProductCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
