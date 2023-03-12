import { createReducer } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product';

// todo: write an interface for product initial state, don't use the product interface, they should be different

export const initialState: Product = {
  name: null, // todo: here, add the falsy values of the property type
  description: null,
  category: null,
  imageSource: null,
  price: null,
  available: null,
  isNewProduct: null,
};

export const productsReducer = createReducer(initialState);
