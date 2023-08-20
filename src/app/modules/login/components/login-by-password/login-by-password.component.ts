import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-by-password',
  templateUrl: './login-by-password.component.html',
  styleUrls: ['./login-by-password.component.scss'],
})
export class LoginByPasswordComponent {
  loginGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
