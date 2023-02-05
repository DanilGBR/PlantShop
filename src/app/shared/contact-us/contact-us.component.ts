import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/helpers/custom-validators.helpers';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {

  public contactForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5), CustomValidators.fullNameFormat]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('',[Validators.required, Validators.minLength(5)]),
    message: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });


  constructor() {}

  public onSubmitContactUs(): void {
    const contactData = this.contactForm.getRawValue();
    console.log(contactData);
  }

}
