import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AcceptModalComponent } from 'src/app/shared/modals/accept-modal/accept-modal.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [MdbModalService],
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private router: Router, private modalService: MdbModalService) {}

  ngOnInit() {}

  public onPasswordReset() {
    this.router.navigate([URLS.LOGIN]);
  }

  public goToLogin(): void {
    this.router.navigate([URLS.LOGIN]);
  }

  openModal() {
    this.modalService.open(AcceptModalComponent, {
      data: {
        modalHeader: 'Password reset status',
        modalMessage: 'Password reset link was sent to email address!',
      },
    });
    this.router.navigate([URLS.LOGIN]);
  }
}
