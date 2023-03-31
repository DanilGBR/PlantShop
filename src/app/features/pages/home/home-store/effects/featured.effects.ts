import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { FeaturedService } from 'src/app/core/services/featured.service';
import * as FeaturedActions from '../actions/featured.actions';

@Injectable()
export class FeaturedProductsEffects {
  constructor(
    private actions$: Actions,
    private featuredService: FeaturedService
  ) {}

  selectCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeaturedActions.FetchFeaturedProducts),
      switchMap(() =>
        this.featuredService.getFeatured().pipe(
          map((response: { featuredProducts: Product[] }) =>
            FeaturedActions.FetchFeaturedProductsSuccess(response)
          ),
          catchError((error: any) =>
            of(FeaturedActions.FetchFeaturedProductsFailure(error))
          )
        )
      )
    )
  );
}
