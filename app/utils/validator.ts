import { dispatch, getState } from '../store';
import { changeError } from '../modules/errors/actions';
import { ErrorsTypes } from '../modules/errors/types';
import validatorIsEmpty from 'validator/es/lib/isEmpty';
import validatorIsEmail from 'validator/es/lib/isEmail';
import validatorIsMobilePhone from 'validator/es/lib/isMobilePhone';

const EMPTY_MSG = 'The field must not be empty.';
const PHONE_NUMBER_MSG = 'Incorrect phone number.';
const EMAIL_MSG = 'Incorrect email.';
const CONFIRM_CODE_MSG = 'Incorrect verification code.';
const PASSWORD_MSG = 'Incorrect password.';
const ZIP_CODE_MSG = 'Incorrect zip code.';
const CONFIRM_PASSWORD_MSG = 'Incorrect confirm password.';

export const isEmpty = (value: string, module: keyof ErrorsTypes, field: string): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(value)) {
    !errors[module][field] && dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    errors[module][field] && dispatch(changeError({ module, field }));
    return true;
  }
};

export const isZip = (value: string, module: keyof ErrorsTypes, field: string): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(value)) {
    !errors[module][field] && dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (value.length < 3 || !value.match(/^[0-9]+$/)) {
      (!errors[module][field] || errors[module][field] === EMPTY_MSG) &&
        dispatch(changeError({ module, field, value: ZIP_CODE_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};

export const isVerifyCode = (value: string, module: keyof ErrorsTypes, field: string): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(value)) {
    dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (value.length < 6) {
      (!errors[module][field] || errors[module][field] === EMPTY_MSG) &&
        dispatch(changeError({ module, field, value: CONFIRM_CODE_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};

export const isPhoneNumber = (value: string, module: keyof ErrorsTypes, field: string): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(value)) {
    dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (!validatorIsMobilePhone(value, ['en-US'])) {
      (!errors[module][field] ||
        errors[module][field] === EMPTY_MSG ||
        errors[module][field] === EMAIL_MSG) &&
        dispatch(changeError({ module, field, value: PHONE_NUMBER_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};

export const isEmail = (value: string, module: keyof ErrorsTypes, field: string): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(value)) {
    dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (!validatorIsEmail(value)) {
      (!errors[module][field] ||
        errors[module][field] === EMPTY_MSG ||
        errors[module][field] === PHONE_NUMBER_MSG) &&
        dispatch(changeError({ module, field, value: EMAIL_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};

export const isPassword = (value: string, module: keyof ErrorsTypes, field: string): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(value)) {
    dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (value.length < 8) {
      (!errors[module][field] || errors[module][field] === EMPTY_MSG) &&
        dispatch(changeError({ module, field, value: PASSWORD_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};

export const isCountryPhone = (
  value: string | undefined,
  isCorrect: boolean,
  module: keyof ErrorsTypes,
  field: string,
): boolean => {
  const errors = getState().errors;

  if (!value || validatorIsEmpty(value)) {
    dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (!isCorrect) {
      (!errors[module][field] ||
        errors[module][field] === EMPTY_MSG ||
        errors[module][field] === EMAIL_MSG) &&
        dispatch(changeError({ module, field, value: PHONE_NUMBER_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};

export const isConfPass = (
  confirmPassword: string,
  password: string,
  module: keyof ErrorsTypes,
  field: string,
): boolean => {
  const errors = getState().errors;

  if (validatorIsEmpty(confirmPassword)) {
    dispatch(changeError({ module, field, value: EMPTY_MSG }));
    return false;
  } else {
    if (confirmPassword.length < 8 || confirmPassword !== password) {
      (!errors[module][field] || errors[module][field] === EMPTY_MSG) &&
        dispatch(changeError({ module, field, value: CONFIRM_PASSWORD_MSG }));
      return false;
    } else {
      errors[module][field] && dispatch(changeError({ module, field }));
      return true;
    }
  }
};
