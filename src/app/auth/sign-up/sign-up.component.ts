import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, CustomValidators.password]],
    });
  }

  ngOnInit() {}

  register() {
    const credentials = this.form.getRawValue();
    this.auth.register(credentials).subscribe((response: any) => {
      const token = response.token;
      this.auth.setLoginToken(token);
      this.router.navigate(['']);
    });
  }

  resetForm() {
    this.form.reset();
  }
}
