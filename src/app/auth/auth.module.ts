import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ValidationMessagesComponent } from '../shared/validation-messages/validation-messages.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ValidationMessagesComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
