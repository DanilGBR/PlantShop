import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { FetchFeaturedProducts } from '../../features/pages/home/home-store/actions/featured.actions';

@Injectable({ providedIn: 'root' })
export class FeaturedProductsStoreService {
  constructor(private store: Store) {}

  public fetchFeaturedProducts(): void {
    this.store.dispatch(FetchFeaturedProducts());
  }

  public selectFeaturedProducts(): Observable<Product[]> {
    return this.store.pipe(
      select((state: any) => {
        return state.featuredProducts.featuredProducts;
      })
    );
  }
}
