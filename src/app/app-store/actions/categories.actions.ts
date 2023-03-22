import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces/productCategories';

export const FetchProductCategories = createAction(
  '[Categories] Fetch Product Categories'
);

export const FetchProductCategoriesSuccess = createAction(
  '[Categories] Fetch Product Categories Success',
  props<Observable<Category[]>>()
);

export const FetchProductCategoriesFailure = createAction(
  '[Categories] Fetch Product Categories Failure',
  props<{ error: any }>()
);
