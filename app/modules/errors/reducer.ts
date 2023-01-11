import { createReducer } from 'deox';
import { changeError, resetErrors, setErrors } from './actions';
import { ErrorsTypes } from './types';

const initialState: ErrorsTypes = {
  login: {},
};

export const errorsReducer = createReducer(initialState, handle => [
  handle(changeError, (state, { payload }) => ({
    ...state,
    [payload.module]: {
      ...state[payload.module],
      [payload.field]: payload.value || '',
    },
  })),

  handle(setErrors, (state, { payload }) => ({
    ...state,
    [payload.module]: payload.value || {},
  })),

  handle(resetErrors, (): ErrorsTypes => initialState),
]);
