import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      CustomValidators.passwordFormat,
    ]),
  });
  public loginErrorMessage: string = '';
  public rememberMe: boolean = false;

  constructor(
    private routerService: Router,
    private authStore: AuthStoreService
  ) {}

  ngOnInit() {}

  public onLogin(): void {
    const payload: LoginCredentials = this.loginForm.getRawValue();
    payload.rememberMe = this.rememberMe;
    console.error(this.rememberMe);
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
