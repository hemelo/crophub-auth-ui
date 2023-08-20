import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthApiResponse } from '../models/response';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorDto: HttpErrorResponse | AuthApiResponse = error;

        if (request.url.startsWith(environment.apis.auth.baseUrl)) {
          errorDto = {
            status: error.status,
            message: error.error || 'An error occurred.',
            success: false,
          };
        }

        return throwError(() => errorDto);
      })
    );
  }
}
