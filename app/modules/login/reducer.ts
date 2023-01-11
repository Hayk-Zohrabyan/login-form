import { createReducer } from 'deox';
import { changeLoginInfo } from './actions';
import { LoginTypes } from './types';

const initialState: LoginTypes = {
  phoneNumber: '',
  email: '',
  name: '',
};

export const loginReducer = createReducer(initialState, handle => [
  handle(changeLoginInfo, (state, { payload }) => ({
    ...state,
    [payload.key]: payload.value,
  })),
]);
