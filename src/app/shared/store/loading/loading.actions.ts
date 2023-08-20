import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Loadings] Set Loading',
  props<{ loadingType: string }>()
);
export const clearLoading = createAction(
  '[Loadings] Clear Loading',
  props<{ loadingType: string }>()
);
