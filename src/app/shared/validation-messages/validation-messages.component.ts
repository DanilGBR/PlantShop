import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import validationMessages, {
  ValidationMessagesType,
} from './validation-messages';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css'],
})
export class ValidationMessagesComponent {
  public message: string = '';
  public validationMessages: ValidationMessagesType = validationMessages;

  @Input() control!: AbstractControl;
  @Input() controlName: string = '';

  constructor() {}
}
