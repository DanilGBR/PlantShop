import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';

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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onRegister() {
    // console.log(this.registerForm);
    // console.log(this.registerForm.controls['fullName'].errors);
    // console.log(this.registerForm.controls['email'].errors);
    // console.log(this.registerForm.controls['password'].errors);
    // console.log(this.registerForm.controls['confirmPassword'].errors);

    const credentials = this.registerForm.getRawValue();
    // console.log(credentials);

    if (!this.registerForm.invalid) {
      this.auth.register(credentials).subscribe(
        (res) => {
          this.auth.setLoginToken(credentials);
          this.router.navigate(['']);
        },
        (err) => {
          console.error(err);
        },
        () => {
          console.log('request completed successfully');
        }
      );
    } else {
      console.log('please introduce all the data in the form');
    }
  }

  resetForm() {
    this.registerForm.reset();
  }
}
