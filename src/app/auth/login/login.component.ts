import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, CustomValidators.passwordFormat]],
    });
  }

  ngOnInit() {}

  public login(): void {
    const credentials: LoginPayload = this.form.getRawValue();
    this.authService.login(credentials).subscribe((response: LoginResponse) => {
      console.log(response);
      const token = response.token;
      this.authService.setLoginToken(token);
      this.router.navigate(['']);
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
