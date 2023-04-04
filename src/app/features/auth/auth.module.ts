import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthenticationEffects } from './store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const components = [
  LoginComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  AdminPanelComponent,
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthenticationEffects]),
  ],
})
export class AuthModule {}
