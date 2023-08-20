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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ParamsEffects } from './store/params/params.effects';
import { paramsReducer } from './store/params/params.reducer';

@NgModule({
  declarations: [
    FormTitleComponent,
    CaptchaDialogComponent,
    SocialLoginButtonsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature('params', paramsReducer),
    EffectsModule.forFeature([ParamsEffects]),
  ],
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
