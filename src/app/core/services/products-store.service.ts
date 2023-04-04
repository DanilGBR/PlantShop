import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FetchProductCategories } from 'src/app/app-store/actions/categories.actions';

@Injectable({ providedIn: 'root' })
export class ProductsStoreService {
  constructor(private store: Store) {}

  public fetchProductCategories(): any {
    this.store.dispatch(FetchProductCategories());
    return this.store.pipe(
      select((state: any) => {
        console.log(state);
        return state;
      })
    );
  }

  public fetchFeaturedProducts() {}
}
