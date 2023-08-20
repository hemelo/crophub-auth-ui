import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-totp-verify',
  templateUrl: './totp-verify.component.html',
  styleUrls: ['./totp-verify.component.scss'],
})
export class TotpVerifyComponent {
  verifyGroup = this.fb.group({
    code: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
