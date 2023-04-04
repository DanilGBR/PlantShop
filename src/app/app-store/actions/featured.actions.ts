import { createAction, props } from '@ngrx/store';

export const FetchFeaturedProducts = createAction(
  '[Featured] Fetch Featured Products',
  props<any>() // todo: lesin
);

export const FetchFeaturedProductsSuccess = createAction(
  '[Featured] Fetch Featured Products Success',
  props<any>()
);

export const FetchFeaturedProductsFailure = createAction(
  '[Featured] Fetch Featured Products Failure',
  props<any>()
);
