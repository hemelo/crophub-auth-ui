import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoginService } from '../../login.service';
import { LoginDto } from '../../models/login';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  catchError,
  delay,
  first,
  firstValueFrom,
  take,
  throwError,
} from 'rxjs';
import {
  selectNonceId,
  selectTarget,
} from 'src/app/shared/store/params/params.selector';
import {
  setNonceId,
  setTarget,
} from 'src/app/shared/store/params/params.actions';
import {
  clearLoading,
  setLoading,
} from 'src/app/shared/store/loading/loading.actions';
import { AuthApiResponse } from 'src/app/core/models/response';
import {
  selectLoading,
  selectLoadingsState,
} from 'src/app/shared/store/loading/loading.selector';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-login-by-password',
  templateUrl: './login-by-password.component.html',
  styleUrls: ['./login-by-password.component.scss'],
})
export class LoginByPasswordComponent implements OnInit {
  loginGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  private nonceId$: Observable<string | null>;
  private target$: Observable<string | null>;
  public loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private loginService: LoginService,
    private navigationService: NavigationService,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.nonceId$ = this.store.select(selectNonceId);
    this.target$ = this.store.select(selectTarget);
    this.loading$ = this.store.select(selectLoading('login'));
  }

  ngOnInit() {
    this.getAndValidateParams();
  }

  /**
   * Get and validate params from url
   * tldr. As the login page is the first page that the user will see after being redirect from authorization server, we need to validate the params from the url
   * @returns
   */
  async getAndValidateParams() {
    const nonceId = this.route.snapshot.params['nonceId'];
    const target = this.route.snapshot.params['target'];
    const savedNonceId = await firstValueFrom(this.nonceId$);
    const savedTarget = await firstValueFrom(this.target$);

    if (nonceId && target) {
      this.store.dispatch(setNonceId({ nonceId }));
      this.store.dispatch(setTarget({ target }));
    } else if (!(savedNonceId && savedTarget)) {
      // Should redirect to default client and then redirect again here
    }
  }

  /**
   * Event handler for submit
   * @returns
   */
  async onLoginFormSubmit() {
    if (!this.loginGroup.valid) {
      this.toastService.add('Invalid form, please fill all required fields.');
      return;
    }

    const value = this.loginGroup.getRawValue() as Required<LoginDto>;
    const nonceId = await firstValueFrom(this.nonceId$);

    if (!nonceId) {
      this.toastService.add('Invalid login session, please try again.');
      return;
    }

    this.store.dispatch(setLoading({ loadingType: 'login' }));

    firstValueFrom(this.loginService.login(value, nonceId))
      .then((response) => {
        this.successFeedback();
      })
      .catch((error: AuthApiResponse) => {
        this.errorFeedback(error.message);
      })
      .finally(() => {
        this.store.dispatch(clearLoading({ loadingType: 'login' }));
      });
  }

  /**
   * Show error feedback to the user after invalid sign in attempt
   */
  private errorFeedback(message: string) {
    this.loginGroup.get('username')?.markAsDirty();
    this.loginGroup.get('username')?.setErrors({ incorrect: true });
    this.loginGroup.get('password')?.markAsDirty();
    this.loginGroup.get('password')?.setErrors({ incorrect: true });

    this.toastService
      .add(message)
      .afterDismissed()
      .subscribe(() => {
        this.resetForm();
      });
  }

  /**
   * Show success feedback to the user after valid sign in attempt
   * Also redirects to post login url (target)
   * @returns
   */
  private successFeedback() {
    this.toastService.add('Sign in successful');

    this.target$.pipe(delay(200), take(1)).subscribe((target) => {
      if (target) {
        this.navigationService.navigateByUrl(target);
        return;
      }

      this.navigationService.genericErrorPage();
    });
  }

  /**
   * Reset form state without clearing the form
   */
  private resetForm() {
    this.loginGroup.get('username')?.setErrors(null);
    this.loginGroup.get('password')?.setErrors(null);
  }
}
