import { LoginTypes } from 'modules/login/types';
import { ErrorsTypes } from 'modules/errors/types';
import { CountryPhoneTypes } from 'modules/countryPhone/types';

export interface RootState {
  login: LoginTypes;
  errors: ErrorsTypes;
  countryPhone: CountryPhoneTypes;
}
