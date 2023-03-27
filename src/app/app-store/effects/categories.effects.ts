import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Category } from 'src/app/core/interfaces/productCategories';
import { CategoriesService } from 'src/app/core/services/categories-http.service';
import * as CategoriesActions from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}

  selectCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.FetchProductCategories),
      switchMap(() =>
        this.categoriesService.getCategories().pipe(
          map((response: { categories: Category[] }) => {
            console.log('effect:', response);
            return CategoriesActions.FetchProductCategoriesSuccess(response);
          }),
          catchError((error: any) =>
            of(CategoriesActions.FetchProductCategoriesFailure(error))
          )
        )
      )
    )
  );
}
