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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ParamsEffects } from './store/params/params.effects';
import { paramsReducer } from './store/params/params.reducer';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { loadingsReducer } from './store/loading/loading.reducer';
import { LoadingsEffects } from './store/loading/loading.effects';

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
    NgxLoadingButtonsModule,
    StoreModule.forFeature('params', paramsReducer),
    StoreModule.forFeature('loadings', loadingsReducer),
    EffectsModule.forFeature([ParamsEffects]),
    EffectsModule.forFeature([LoadingsEffects]),
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    NgxLoadingButtonsModule,
    MatInputModule,
    FormTitleComponent,
    SocialLoginButtonsComponent,
    CaptchaDialogComponent,
  ],
})
export class SharedModule {}
