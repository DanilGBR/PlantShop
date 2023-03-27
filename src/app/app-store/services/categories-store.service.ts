import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, first, Observable } from 'rxjs';
import { FetchProductCategories } from '../actions/categories.actions';
import { Category } from 'src/app/core/interfaces/productCategories';

@Injectable({ providedIn: 'root' })
export class CategoriesStoreService {
  constructor(private store: Store) {}

  public fetchCategories(): void {
    this.store.dispatch(FetchProductCategories());
  }

  public selectCategories(): Observable<Category[]> {
    return this.store.pipe(
      select((state: any) => {
        return state.categories.categories;
      })
    );
  }
}
