import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';
import * as ProductActions from '../actions/products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  selectCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.FetchProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((response: { products: Product[] }) =>
            ProductActions.FetchProductsSuccess(response)
          ),
          catchError((error: any) =>
            of(ProductActions.FetchProductsFailure(error))
          )
        )
      )
    )
  );
}
