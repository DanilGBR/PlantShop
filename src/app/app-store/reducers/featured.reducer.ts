import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product';
import {
  FetchFeaturedProducts,
  FetchFeaturedProductsFailure,
  FetchFeaturedProductsSuccess,
} from '../actions/featured.actions';

interface FeaturedProductsInitialState {
  featuredProducts: Product[];
}

export const initialState: FeaturedProductsInitialState = {
  featuredProducts: [],
};

export const featuredProductsReducer = createReducer(
  initialState,
  on(FetchFeaturedProducts, (state) => ({ ...state, error: null })),
  on(FetchFeaturedProductsSuccess, (state, actions) => ({
    ...state,
    featuredProducts: actions.featuredProducts,
    error: null,
  })),
  on(FetchFeaturedProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
