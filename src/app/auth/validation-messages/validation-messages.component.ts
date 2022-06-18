import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import error_messages, { ValidationMessagesType } from './validation-messages';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css'],
})
export class ValidationMessagesComponent implements OnInit {
  public message: string = '';
  public validationMessages: ValidationMessagesType = error_messages;

  @Input() control!: AbstractControl;
  @Input() controlName: string = '';

  constructor() {}

  ngOnInit(): void {}

  testErrorMessage() {}
}
