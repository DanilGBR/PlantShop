import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/features/auth/services/auth-http.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import { UserLoginState } from 'src/app/features/auth/interfaces/auth';
import URLS from 'src/app/core/constants/urls';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup(
    {
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        CustomValidators.fullNameFormat,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        CustomValidators.passwordFormat,
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    CustomValidators.passwordMatch('password', 'confirmPassword')
  );
  public registrationErrorMessage: string = '';
  constructor(
    private authService: AuthService,
    private routerService: Router,
    private tokenService: TokenStorageService
  ) {}
  ngOnInit() {}
  onRegister() {
    // const credentials = this.registerForm.getRawValue();
    // if (!this.registerForm.invalid) {
    //   this.authService.register(credentials).subscribe({
    //     next: (res: LoginResponse): void => {
    //       this.tokenService.setLoginToken(res.token);
    //     },
    //     error: (err: HttpErrorResponse): void => {
    //       this.registrationErrorMessage = err.error;
    //     },
    //     complete: () => {
    //       this.routerService.navigate([URLS.HOME]);
    //       this.onResetForm();
    //     },
    //   });
    // } else {
    //   this.registrationErrorMessage =
    //     'Please introduce all the data in the form';
    // }
  }
  onResetForm() {
    this.registerForm.reset({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }
  public goToTerms() {
    this.routerService.navigate([URLS.PRIVACY]);
  }
}
