import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-login-buttons',
  templateUrl: './social-login-buttons.component.html',
  styleUrls: ['./social-login-buttons.component.scss'],
})
export class SocialLoginButtonsComponent {
  @Input()
  action?: 'login' | 'register';
}
