import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product';

export const FetchProducts = createAction('[Products] Fetch Products');

export const FetchProductsSuccess = createAction(
  '[Products] Fetch Products Success',
  props<{ products: Product[] }>()
);

export const FetchProductsFailure = createAction(
  '[Products] Fetch Products Failure',
  props<{ error: any }>()
);
