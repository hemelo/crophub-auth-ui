import { createAction, props } from '@ngrx/store';

// Set nonceId action
export const setNonceId = createAction(
  '[Params] Set NonceId',
  props<{ nonceId: string }>()
);

// Remove nonceId action
export const removeNonceId = createAction('[Params] Remove NonceId');

// Set target action
export const setTarget = createAction(
  '[Params] Set Target',
  props<{ target: string }>()
);

// Remove target action
export const removeTarget = createAction('[Params] Remove Target');
