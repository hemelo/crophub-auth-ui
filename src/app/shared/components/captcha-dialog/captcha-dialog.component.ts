import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscriber,
  Subscription,
  catchError,
  debounceTime,
  finalize,
  first,
  interval,
  merge,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Captcha } from 'src/app/core/models/response';
import { CaptchaService } from 'src/app/core/services/captcha.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { clearLoading, setLoading } from '../../store/loading/loading.actions';

@Component({
  selector: 'app-captcha-dialog',
  templateUrl: './captcha-dialog.component.html',
  styleUrls: ['./captcha-dialog.component.scss'],
})
export class CaptchaDialogComponent implements OnDestroy {
  captchaInput = new FormControl('');
  captcha$: BehaviorSubject<Captcha | null>;

  private captchaUserGetter$: Subject<void>;
  private captchaSubscription: Subscription;

  constructor(
    private dialogRef: MatDialogRef<CaptchaDialogComponent>,
    private captchaService: CaptchaService,
    private toastService: ToastService,
    private store: Store
  ) {
    this.captcha$ = new BehaviorSubject<Captcha | null>(null);
    this.captchaUserGetter$ = new Subject();
    this.captchaSubscription = this.initCaptchaSubscriber();

    // Forces to get initial captcha
    this.getNewCaptcha();
  }

  /**
   * Merges all the ways to get a new captcha in a single observable
   * @returns
   */
  initCaptchaSubscriber() {
    return merge(
      this.userTriggeredGetter(),
      this.periodicCaptchaGetter().pipe(switchMap(() => []))
    )
      .pipe(
        tap(() => this.store.dispatch(setLoading({ loadingType: 'captcha' }))),
        finalize(() =>
          this.store.dispatch(clearLoading({ loadingType: 'captcha' }))
        ),
        catchError((error) => {
          this.toastService.add('Error while loading captcha');
          return throwError(() => error);
        })
      )
      .subscribe((captcha) => this.captcha$?.next(captcha));
  }

  /**
   * Creates a observable to get a new captcha periodically
   * @returns
   */
  private periodicCaptchaGetter() {
    return interval(60000).pipe(
      switchMap(() => this.captchaService.getCaptcha())
    );
  }

  /**
   * Creates a observable to get a new captcha by the user
   * @returns
   */
  private userTriggeredGetter() {
    return this.captchaUserGetter$.pipe(
      debounceTime(300),
      switchMap(() => this.captchaService.getCaptcha())
    );
  }

  /**
   * Trigger to get a new captcha forcibly by the user
   */
  getNewCaptcha() {
    this.captchaUserGetter$.next();
  }

  /**
   * Validates captcha and closes the dialog if it's valid
   * @returns
   */
  validateCaptcha() {
    if (!this.captchaInput.value) {
      this.toastService.add('Please, fill captcha input');
      return;
    }

    if (!this.captcha$.value) {
      this.toastService.add(
        'It seems captcha is not working, please, try again later'
      );
      return;
    }

    if (
      !this.captchaService.validateCaptcha(
        this.captcha$.value,
        this.captchaInput.value
      )
    ) {
      this.captchaInput.setErrors({ invalid: true });
      return;
    }

    this.dialogRef.close(this.captchaInput.value);
  }

  ngOnDestroy(): void {
    this.captchaSubscription.unsubscribe();
  }
}
