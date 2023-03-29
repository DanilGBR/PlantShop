import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product';

export const FetchFeaturedProducts = createAction(
  '[Featured] Fetch Featured Products'
);

export const FetchFeaturedProductsSuccess = createAction(
  '[Featured] Fetch Featured Products Success',
  props<{ featuredProducts: Product[] }>()
);

export const FetchFeaturedProductsFailure = createAction(
  '[Featured] Fetch Featured Products Failure',
  props<{ error: any }>()
);
