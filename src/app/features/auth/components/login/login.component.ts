import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import { LoginCredentials } from 'src/app/features/auth/interfaces/auth';
import URLS from 'src/app/core/constants/urls';
import { AuthStoreService } from '../../services/auth-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      CustomValidators.passwordFormat,
    ]),
    rememberMe: new FormControl(false),
  });
  public loginErrorMessage: string = '';

  constructor(
    private routerService: Router,
    private authStore: AuthStoreService
  ) {}

  public onLogin(): void {
    const payload: LoginCredentials = this.loginForm.getRawValue();
    this.authStore.fetchUserLoginState(payload);
  }

  public onLogout(): void {
    this.authStore.logoutUser();
  }
  public goToSignup(): void {
    this.routerService.navigate([URLS.SIGNUP]);
  }
  public goToLogin(): void {
    this.routerService.navigate([URLS.FORGOTPASS]);
  }
}
