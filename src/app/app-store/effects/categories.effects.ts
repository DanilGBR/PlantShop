import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, switchMap } from 'rxjs';
import { Category } from 'src/app/core/interfaces/productCategories';
import { CategoriesService } from 'src/app/core/services/categories.service';
import * as CategoriesActions from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {
  fetchCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.FetchProductCategories),
      switchMap(async () => {
        const categories$: Observable<Category[]> =
          this.categoriesService.getCategories();
        console.log('Categories observable', categories$);
        return CategoriesActions.FetchProductCategoriesSuccess(categories$);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
