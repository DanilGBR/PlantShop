import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css'],
})
export class ValidationMessagesComponent implements OnInit {
  public message: string = '';

  error_messages: Object = {
    fullName: [
      { type: 'required', message: 'Full name is required' },
      {
        type: 'minlength',
        message: 'Full name must be at least 5 characters long',
      },
      {
        type: 'maxlength',
        message: 'Full name cannot be more than 25 characters long',
      },
      {
        type: 'pattern',
        message: 'Your full name must contain only letters',
      },
      {
        type: 'validUsername',
        message: 'Your full name has already been taken',
      },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' },
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long',
      },
      {
        type: 'pattern',
        message:
          'Your password must contain at least one uppercase, one lowercase, and one number',
      },
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions' },
    ],
  };

  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage(formName: string) {
    const fullName = this.form.get('fullName');
    const email = this.form.get('email');
    const password = this.form.get('password');
  }
}
