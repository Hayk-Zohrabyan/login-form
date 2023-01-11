import { createAction } from 'deox';

export const changeLoginInfo = createAction(
  'login/CHANGE_LOGIN_INFO',
  resolve => (payload: { key: string; value: string | boolean }) => resolve(payload),
);

export const sendLoginInfo = {
  request: createAction('login/SEND_LOGIN_INFO'),
  success: createAction('login/SEND_LOGIN_INFO_SUCCESS'),
  fail: createAction('login/SEND_LOGIN_INFO_FAIL'),
};
