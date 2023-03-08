import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of } from 'rxjs';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { AuthService } from '../../services/auth-http.service';
import * as AuthActions from '../actions/auth.actions';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';

@Injectable()
export class AuthenticationEffects {
  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.LoginAction),
  //     switchMap((payload: LoginPayload) => {
  //       console.log('payload', payload);
  //       return this.authService.login(payload).pipe(
  //         map((response) => {
  //           console.log('response', response);
  //           return AuthActions.LoginActionSuccess(response);
  //         })
  //       );
  //     }),
  //     catchError((error) => {
  //       console.log('error', error);
  //       return of(AuthActions.LoginActionFailure({ error }));
  //     })
  //   )
  // );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LoginAction),
      switchMap((payload) =>
        this.authService.login(payload).pipe(
          map((response) => {
            const userInfo = this.tokenService.getDecodedToken(response.token);
            this.tokenService.setLoginToken(response.token, payload.rememberMe);
            this.routerService.navigate([URLS.HOME]);
            return AuthActions.LoginActionSuccess(userInfo);
          })
        )
      ),
      catchError((error: any) => {
        return of(AuthActions.LoginActionFailure(error));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private routerService: Router
  ) {}
}
