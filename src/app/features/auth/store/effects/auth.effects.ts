import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of } from 'rxjs';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { LoginPayload } from '../../interfaces/auth';
import { AuthService } from '../../services/auth-http.service';
import * as AuthActions from '../actions/auth.actions';
import { flatMap, mergeMap, switchMap } from 'rxjs/operators';

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
      switchMap((payload: LoginPayload) =>
        this.authService
          .login(payload)
          .pipe(map((response) => AuthActions.LoginActionSuccess(response)))
      ),
      catchError((error: any) => of(AuthActions.LoginActionFailure(error)))
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenStorageService
  ) {}
}
