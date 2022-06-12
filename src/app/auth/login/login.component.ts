import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import { LoginResponse } from 'src/app/core/interfaces/loginResponse';
import { AuthService } from 'src/app/core/services/auth.service';

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
      password: [null, [Validators.required, CustomValidators.password]],
    });
  }

  ngOnInit() {}

  public login(): void {
    const credentials = this.form.getRawValue();
    this.authService.login(credentials).subscribe((response: LoginResponse) => {
      const token = response.token;
      this.authService.setLoginToken(token);
      this.router.navigate(['']);
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
