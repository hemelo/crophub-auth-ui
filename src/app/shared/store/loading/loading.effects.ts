import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, delay, tap } from 'rxjs/operators';
import * as LoadingsActions from './loading.actions';

@Injectable()
export class LoadingsEffects {
  constructor(private actions$: Actions) {}

  /*startLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadingsActions.setLoading),
      delay(1000),
      map((action) =>
        LoadingsActions.clearLoading({ loadingType: action.loadingType })
      )
    )
  );*/
}
