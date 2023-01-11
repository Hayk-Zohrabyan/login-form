import { createReducer } from 'deox';
import { CountryPhoneTypes } from './types';
import { changeCountryPhone, setCountryPhone } from './actions';

const initialState: CountryPhoneTypes = {
  isVisible: false,
  activeData: {
    dialCode: '+7',
    uri: require('views/assets/images/flags/ru.png'),
    code: 'RU',
    name: 'Russian Federation',
    inputMask: '[000] [000] [00] [00]',
  },
  searchText: '',
};

export const countryPhoneReducer = createReducer(initialState, handle => [
  handle(changeCountryPhone, (state, { payload }) => ({
    ...state,
    [payload.key]: payload.value,
  })),

  handle(setCountryPhone, (state, { payload }) => ({
    ...state,
    ...payload,
  })),
]);
