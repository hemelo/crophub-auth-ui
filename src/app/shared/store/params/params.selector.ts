import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ParamsState } from './params.reducer';

export const selectParamsState = createFeatureSelector<ParamsState>('params');

export const selectNonceId = createSelector(
  selectParamsState,
  (state) => state.nonceId
);

export const selectTarget = createSelector(
  selectParamsState,
  (state) => state.target
);
