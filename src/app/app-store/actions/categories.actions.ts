import { createAction, props } from '@ngrx/store';
import { CategoriesArray } from 'src/app/core/interfaces/productCategories';

export const FetchProductCategories = createAction(
  '[Categories] Fetch Product Categories'
);

export const FetchProductCategoriesSuccess = createAction(
  '[Categories] Fetch Product Categories Success',
  props<CategoriesArray>() // todo: props<{data: Category[]}>
);

export const FetchProductCategoriesFailure = createAction(
  '[Categories] Fetch Product Categories Failure',
  props<{ error: any }>()
);
