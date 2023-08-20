import { createReducer, on } from '@ngrx/store';
import * as LoadingsActions from './loading.actions';

export interface LoadingsState {
  loadingTypes: string[];
}

export const initialState: LoadingsState = {
  loadingTypes: [],
};

export const loadingsReducer = createReducer(
  initialState,
  on(LoadingsActions.setLoading, (state, { loadingType }) => {
    return {
      ...state,
      loadingTypes: [...state.loadingTypes, loadingType],
    };
  }),
  on(LoadingsActions.clearLoading, (state, { loadingType }) => {
    return {
      ...state,
      loadingTypes: state.loadingTypes.filter((type) => type !== loadingType),
    };
  })
);
