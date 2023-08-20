import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginByPasswordComponent } from './components/login-by-password/login-by-password.component';
import { LoginByDeviceComponent } from './components/login-by-device/login-by-device.component';
import { EmailVerifyComponent } from './components/email-verify/email-verify.component';
import { TotpVerifyComponent } from './components/totp-verify/totp-verify.component';

const routes: Routes = [
  {
    path: '',
    component: LoginByPasswordComponent,
  },
  {
    path: 'by-device',
    component: LoginByDeviceComponent,
  },
  {
    path: 'email-verify',
    component: EmailVerifyComponent,
  },
  {
    path: 'totp-verify',
    component: TotpVerifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
