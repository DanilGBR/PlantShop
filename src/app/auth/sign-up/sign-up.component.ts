import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';
import URLs from 'src/app/core/constants/urls';
import { LoginResponse } from 'src/app/core/interfaces/loginResponse';
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
        Validators.pattern(
          /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
        ),
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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onRegister() {
    const credentials = this.registerForm.getRawValue();

    if (!this.registerForm.invalid) {
      this.auth.register(credentials).subscribe({
        next: (res: LoginResponse): void => {
          this.auth.setLoginToken(res.token);
        },
        error: (err: any): void => {
          this.registrationErrorMessage = err.error;
        },
        complete: () => {
          this.router.navigate([URLs.HOME]);
          this.resetForm();
        },
      });
    } else {
      this.registrationErrorMessage =
        'Please introduce all the data in the form';
    }
  }

  resetForm() {
    this.registerForm.reset({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }
}
