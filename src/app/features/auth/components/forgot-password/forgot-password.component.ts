import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import URLS from 'src/app/core/constants/urls';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AcceptModalComponent } from 'src/app/shared/modals/accept-modal/accept-modal.component';
import { AuthService } from 'src/app/features/auth/services/auth-http.service';
import { ForgotPasswordResponse } from 'src/app/features/auth/interfaces/auth';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(
    private router: Router,
    private modalService: MdbModalService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  public onPasswordReset() {
    this.router.navigate([URLS.LOGIN]);
  }

  public goToLogin(): void {
    this.router.navigate([URLS.LOGIN]);
  }

  openModal(title: string, message: string) {
    this.modalService.open(AcceptModalComponent, {
      data: {
        modalHeader: title,
        modalMessage: message,
      },
    });
  }

  onResetPassword() {
    const formData = this.forgotPasswordForm.getRawValue();

    if (!this.forgotPasswordForm.invalid) {
      this.authService.resetPassword(formData.email).subscribe({
        next: (response: ForgotPasswordResponse): void => {
          this.openModal('Password reset status', response.message);
        },
        error: (error: HttpErrorResponse): void => {
          this.openModal('Password reset error', error.error.message);
        },
        complete: () => {
          this.goToLogin();
        },
      });
    }
  }
}
