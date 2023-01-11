import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { getType } from 'deox';
import { RootState } from 'types';
import { Action, combineReducers } from 'redux';

import { resetStore } from 'modules/app/actions';
import { loginReducer } from 'modules/login/reducer';
import { errorsReducer } from 'modules/errors/reducer';
import { countryPhoneReducer } from 'modules/countryPhone/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const projectReducer = combineReducers<RootState>({
  login: loginReducer,
  errors: errorsReducer,
  countryPhone: countryPhoneReducer,
});

const rootReducer = (
  state: RootState | undefined,
  action: Action,
): ReturnType<typeof projectReducer> => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }

  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
