import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const components = [
  LoginComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  AdminPanelComponent,
];
const modules = [
  CommonModule,
  AuthRoutingModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: components,
  imports: [...modules],
})
export class AuthModule {}
