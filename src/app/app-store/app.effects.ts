import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of } from 'rxjs';
import { AuthService } from '../features/auth/services/auth-http.service';
import * as AppActions from './app.actions';

// @Injectable()
// export class AuthEffects {
//   constructor(private actions$: Actions, private authService: AuthService) {}



//   login$ = createEffect( () => {
//     return this.actions$.pipe(
//       ofType(AppActions.fetchUserInfo),
//       exhaustMap((action) =>{
//         return this.authService.login().pipe()
//       })
//     )
//   },
//   catchError((error) => of(AppActions.fetchUserInfoError({error}))))

// }
