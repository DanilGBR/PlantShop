import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import { LoginResponse } from 'src/app/core/interfaces/loginResponse';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginPayload } from 'src/app/core/interfaces/loginPayload';

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
  private isChecked: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  public onLogin(): void {
    const credentials: LoginPayload = this.loginForm.getRawValue();
    this.authService.login(credentials).subscribe({
      next: (response: LoginResponse) => {
        const token = response.token;
        this.authService.setLoginToken(token, this.isChecked);
      },
      error: (error: any) => {
        this.loginErrorMessage = error.error.message;
      },
      complete: () => {
        this.router.navigate(['']);
      },
    });
  }

  public onChange(event: any): void {
    this.isChecked = event.target.checked;
  }

  public logout(): void {
    this.authService.logout();
  }
}
