import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import {
  setNonceId,
  removeNonceId,
  setTarget,
  removeTarget,
} from './params.actions';

@Injectable()
export class ParamsEffects {
  constructor(private actions$: Actions) {}

  // Example of handling asynchronous actions, you can modify this as needed
  exampleAsyncEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setNonceId), // Listen for the setNonceId action
      mergeMap((action) =>
        // Simulate an API call or async operation
        // Replace with actual async logic
        this.fakeApiCall(action.nonceId).pipe(
          map(() => removeNonceId()), // Dispatch removeNonceId action after successful async operation
          catchError(() => EMPTY) // Handle errors gracefully
        )
      )
    )
  );

  // Simulate an API call, replace this with actual API logic
  private fakeApiCall(nonceId: string) {
    // Simulate a delay
    return of(null).pipe(delay(1000));
  }
}
