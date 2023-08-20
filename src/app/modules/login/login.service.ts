import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApiResponse } from 'src/app/core/models/response';
import { LoginDto } from './models/login';

@Injectable()
export class LoginService {
  private readonly authApiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /**
   * Authenticates on Auth API with username and password
   * NonceId is required for Auth API session validation
   * @param username
   * @param password
   * @param nonceId
   * @returns
   */
  login(
    login: Required<LoginDto>,
    nonceId: string
  ): Observable<AuthApiResponse> {
    const headers = new HttpHeaders();
    headers.append('nonceId', nonceId);

    return this.http.post<AuthApiResponse>(`${this.authApiUrl}/login`, login, {
      headers,
    });
  }
}
