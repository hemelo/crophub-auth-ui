import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoadingsState } from './loading.reducer';

export const selectLoadingsState =
  createFeatureSelector<LoadingsState>('loadings');

export const selectLoadingTypes = createSelector(
  selectLoadingsState,
  (state: LoadingsState) => state.loadingTypes
);

export const selectAnyLoading = createSelector(
  selectLoadingTypes,
  (loadingTypes) => loadingTypes.length > 0
);

export const selectLoading = (loadingType: string) =>
  createSelector(selectLoadingsState, (state: LoadingsState) =>
    state.loadingTypes.includes(loadingType)
  );
