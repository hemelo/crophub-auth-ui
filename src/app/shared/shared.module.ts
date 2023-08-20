import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { CaptchaDialogComponent } from './components/captcha-dialog/captcha-dialog.component';
import { SocialLoginButtonsComponent } from './components/social-login-buttons/social-login-buttons.component';

@NgModule({
  declarations: [
    FormTitleComponent,
    CaptchaDialogComponent,
    SocialLoginButtonsComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormTitleComponent,
    SocialLoginButtonsComponent,
    CaptchaDialogComponent,
  ],
})
export class SharedModule {}
