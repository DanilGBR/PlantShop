import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import { LoginResponse, LoginPayload } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import URLS from 'src/app/core/constants/urls';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

interface authLinks {
  object: { title: string; url: string };
}
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
    private authService: AuthService,
    private routerService: Router,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit() {}

  public onLogin(): void {
    const credentials: LoginPayload = this.loginForm.getRawValue();
    this.authService.login(credentials).subscribe({
      next: (response: LoginResponse) => {
        const token = response.token;
        this.tokenService.setLoginToken(token, this.rememberMe);
      },
      error: (error: any) => {
        this.loginErrorMessage = error.error.message;
      },
      complete: () => {
        this.routerService.navigate([URLS.HOME]);
      },
    });
  }

  public onLogout(): void {
    this.authService.logout();
  }
  public goToSignup(): void {
    this.routerService.navigate([URLS.SIGNUP]);
  }
  public goToLogin(): void {
    this.routerService.navigate([URLS.FORGOTPASS]);
  }
}
