import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {}

  public login(): void {
    const credentials = this.form.getRawValue();
    this.authService.login(credentials).subscribe((response: LoginResponse) => {
      const token = response.token;
      console.log(response);
      this.authService.setLoginToken(token);
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
