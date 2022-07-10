import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css'],
})
export class ForgotPassComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public goToLogin(): void {
    this.router.navigate([URLS.LOGIN]);
  }
}
