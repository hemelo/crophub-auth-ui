import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginByPasswordComponent } from './components/login-by-password/login-by-password.component';
import { LoginByDeviceComponent } from './components/login-by-device/login-by-device.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { EmailVerifyComponent } from './components/email-verify/email-verify.component';
import { TotpVerifyComponent } from './components/totp-verify/totp-verify.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginByPasswordComponent,
    LoginByDeviceComponent,
    EmailVerifyComponent,
    TotpVerifyComponent,
  ],
  imports: [CommonModule, SharedModule, LoginRoutingModule],
  providers: [LoginService],
})
export class LoginModule {}
