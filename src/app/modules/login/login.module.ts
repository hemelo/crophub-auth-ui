import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginByPasswordComponent } from './components/login-by-password/login-by-password.component';
import { LoginByDeviceComponent } from './components/login-by-device/login-by-device.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginByPasswordComponent, LoginByDeviceComponent],
  imports: [CommonModule, SharedModule, LoginRoutingModule],
})
export class LoginModule {}
