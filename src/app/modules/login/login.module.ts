import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginByPasswordComponent } from './components/login-by-password/login-by-password.component';
import { LoginByDeviceComponent } from './components/login-by-device/login-by-device.component';

@NgModule({
  declarations: [LoginByPasswordComponent, LoginByDeviceComponent],
  imports: [CommonModule],
})
export class LoginModule {}
