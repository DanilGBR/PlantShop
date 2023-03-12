import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { lastValueFrom, map, Observable, switchMap } from 'rxjs';
import { CategoriesArray } from 'src/app/core/interfaces/productCategories';
import { CategoriesService } from 'src/app/core/services/categories.service';
import * as CategoriesActions from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {
  fetchCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.FetchProductCategories),
      switchMap(async () => {
        const categories$: Observable<CategoriesArray> =
          this.categoriesService.getCategories();
        console.log(categories$);

        const categories = await lastValueFrom(categories$); // todo: the effect should return an observable
        return CategoriesActions.FetchProductCategoriesSuccess(categories);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
