import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { FetchProducts } from '../actions/products.actions';

@Injectable({ providedIn: 'root' })
export class ProductsStoreService {
  constructor(private store: Store) {}

  public fetchProducts(): void {
    this.store.dispatch(FetchProducts());
  }

  public selectProducts(): Observable<Product[]> {
    return this.store.pipe(
      select((state: any) => {
        return state.products.products;
      })
    );
  }
}
