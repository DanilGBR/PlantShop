import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import {
  LoginCredentials,
  UserAuthState,
} from 'src/app/features/auth/interfaces/auth';
import URLS from 'src/app/core/constants/urls';
import { AuthStoreService } from '../../store/services/auth-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      CustomValidators.passwordFormat,
    ]),
    rememberMe: new FormControl(false),
  }); // todo: extract this in separate function -> login form = initializeForm() => function returns newFormGroup({....})
  public userLoginState$!: Observable<UserAuthState>;

  constructor(
    private routerService: Router,
    private authStore: AuthStoreService
  ) {}

  public ngOnInit() {
    this.userLoginState$ = this.authStore.selectLoginState();
  }

  public onLogin(): void {
    const payload: LoginCredentials = this.loginForm.getRawValue();
    this.authStore.loginUser(payload);
  }

  public onLogout(): void {
    this.authStore.logoutUser();
  }
  public goToSignup(): void {
    this.routerService.navigate([URLS.SIGNUP]);
  }
  public goToLogin(): void {
    this.routerService.navigate([URLS.FORGOT_PASS]);
  }
}
