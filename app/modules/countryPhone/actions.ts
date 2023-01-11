import { createAction } from 'deox';
import { CountryPhoneDProps } from 'types';

export const changeCountryPhone = createAction(
  'countryPhone/CHANGE_COUNTRY_PHONE',
  resolve => (payload: { key: string; value: string | boolean | CountryPhoneDProps | undefined }) =>
    resolve(payload),
);

export const setCountryPhone = createAction(
  'countryPhone/SET_COUNTRY_PHONE',
  resolve => (payload: {}) => resolve(payload),
);
