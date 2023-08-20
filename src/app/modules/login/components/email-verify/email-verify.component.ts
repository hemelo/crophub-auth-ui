import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss'],
})
export class EmailVerifyComponent {
  verifyGroup = this.fb.group({
    code: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
