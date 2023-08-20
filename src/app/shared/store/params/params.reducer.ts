import { createReducer, on } from '@ngrx/store';
import * as ParamsActions from './params.actions';

export interface ParamsState {
  nonceId: string | null;
  target: string | null;
}

export const initialState: ParamsState = {
  nonceId: null,
  target: null,
};

export const paramsReducer = createReducer(
  initialState,
  on(ParamsActions.setNonceId, (state, { nonceId }) => ({ ...state, nonceId })),
  on(ParamsActions.removeNonceId, (state) => ({ ...state, nonceId: null })),
  on(ParamsActions.setTarget, (state, { target }) => ({ ...state, target })),
  on(ParamsActions.removeTarget, (state) => ({ ...state, target: null }))
);
