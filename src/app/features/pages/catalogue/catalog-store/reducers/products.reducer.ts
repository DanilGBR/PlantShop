import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product';
import {
  FetchProducts,
  FetchProductsSuccess,
  FetchProductsFailure,
} from '../actions/products.actions';

interface ProductsInitialState {
  products: Product[];
}

export const initialState: ProductsInitialState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(FetchProducts, (state) => ({ ...state, error: null })),
  on(FetchProductsSuccess, (state, actions) => ({
    ...state,
    products: actions.products,
    error: null,
  })),
  on(FetchProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
