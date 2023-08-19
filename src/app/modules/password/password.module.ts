import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PasswordRoutingModule } from './password-routing.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, SharedModule, PasswordRoutingModule],
})
export class PasswordModule {}
