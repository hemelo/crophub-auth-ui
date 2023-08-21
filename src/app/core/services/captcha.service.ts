import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Captcha } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private readonly apiUrl: string = environment.apis.auth.baseUrl;

  constructor(private http: HttpClient) {}

  getCaptcha() {
    return this.http.get<Captcha>(`${this.apiUrl}/captcha`);
  }

  validateCaptcha(captcha: Captcha, captchaInput: string) {
    return captchaInput == captcha.code;
  }
}
