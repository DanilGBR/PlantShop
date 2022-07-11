import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public goToLogin(): void {
    this.router.navigate([URLS.LOGIN]);
  }
}
