import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-by-device',
  templateUrl: './login-by-device.component.html',
  styleUrls: ['./login-by-device.component.scss'],
})
export class LoginByDeviceComponent {
  loginGroup = this.fb.group({
    phone: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
