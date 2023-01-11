import { createAction } from 'deox';
import { ResponseErrors, Any } from 'types';
import { ErrorsTypes } from './types';

export const processRequestError = createAction(
  'errors/PROCESS_REQUEST_ERROR',
  resolve =>
    (payload: {
      error: Any;
      failAction: Any;
      module: keyof ErrorsTypes;
      field?: Any;
      subPrefix?: string;
      failPayload?: Any;
    }) =>
      resolve(payload),
);

export const changeError = createAction(
  'errors/CHANGE_ERROR',
  resolve => (payload: { module: keyof ErrorsTypes; field: string; value?: string }) =>
    resolve(payload),
);
export const setErrors = createAction(
  'errors/SET_ERRORS',
  resolve => (payload: { module: keyof ErrorsTypes; value?: ResponseErrors }) => resolve(payload),
);
export const resetErrors = createAction('errors/RESET_ERRORS');
