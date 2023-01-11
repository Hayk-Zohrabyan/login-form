import React, { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  GeneralView,
  AnimatedInput,
  Button,
  CountryPhoneInput,
  CountryPhoneModal,
  LoginModal,
  KeyboardAvoidingScrollView,
} from 'components';
import { ShowPopUpMessage } from 'services/popUpMessage';
import * as LoginActions from 'modules/login/actions';
import * as ErrorsActions from 'modules/errors/actions';
import * as CountryPhoneActions from 'modules/countryPhone/actions';
import { RootState } from 'types';
import { KeyboardDismiss, isCountryPhone, useAction, isEmail, isEmpty } from 'utils';

export const LoginScreen: FunctionComponent = () => {
  const [isCorrectNumber, setIsCorrectNumber] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const countryPhone = useSelector((state: RootState) => state.countryPhone);
  const { email, name, phoneNumber } = useSelector((state: RootState) => state.login);
  const activeData = useSelector((state: RootState) => state.countryPhone.activeData);
  const loginErrors = useSelector((state: RootState) => state.errors.login);

  const setCountryPhone = useAction(CountryPhoneActions.setCountryPhone);
  const changeLoginInfo = useAction(LoginActions.changeLoginInfo);
  const sendLoginInfo = useAction(LoginActions.sendLoginInfo.request);
  const changeError = useAction(ErrorsActions.changeError);

  const onChangeText = useCallback(
    ({ value, type }: { value: string; type: string }): void => {
      loginErrors[type] && changeError({ module: 'login', field: type });

      changeLoginInfo({ key: type, value });
    },
    [loginErrors],
  );

  const onLogin = useCallback((): void => {
    const newIsEmail = isEmail(email, 'login', 'email');
    const newIsName = isEmpty(name, 'login', 'name');
    const newIsCountryPhone = isCountryPhone(phoneNumber, isCorrectNumber, 'login', 'phoneNumber');

    if (newIsEmail && newIsName && newIsCountryPhone) {
      ShowPopUpMessage('Message sent successfully.');
      setTimeout(() => {
        setShowLoginModal(true);
      }, 2000);
    }
  }, [email, name, phoneNumber, isCorrectNumber]);

  return (
    <GeneralView>
      <KeyboardAvoidingScrollView>
        <View flex={1} ph={20} jc="center" pb={100}>
          <CountryPhoneInput
            value={phoneNumber}
            onChangeNumber={arg => {
              setIsCorrectNumber(arg.isCorrectNumber);
              onChangeText({ value: arg.phoneNumber, type: 'phoneNumber' });
            }}
            activeData={countryPhone.activeData}
            openModal={() => {
              KeyboardDismiss();
              setTimeout(() => setCountryPhone({ isVisible: true }), 300);
            }}
            error={loginErrors.phoneNumber}
          />
          <View mv={15}>
            <AnimatedInput
              isRequired
              label="Name"
              autoCapitalize="words"
              value={name}
              onChangeText={value => onChangeText({ value, type: 'name' })}
              error={loginErrors.name}
            />
          </View>
          <AnimatedInput
            isRequired
            label="Email"
            value={email}
            onChangeText={value => onChangeText({ value, type: 'email' })}
            error={loginErrors.email}
          />
          <Button mt={15} label="Send" onPress={onLogin} />
        </View>
      </KeyboardAvoidingScrollView>

      <CountryPhoneModal
        isVisible={countryPhone.isVisible}
        setIsVisible={value => setCountryPhone({ isVisible: value, searchText: '' })}
        searchText={countryPhone.searchText}
        setSearchText={value => setCountryPhone({ searchText: value })}
        activeCountryPhone={countryPhone.activeData}
        setActiveCountryPhone={value => {
          onChangeText({ value: '', type: 'phoneNumber' });
          setCountryPhone({ activeData: value, isVisible: false, searchText: '' });
        }}
      />
      <LoginModal
        isVisible={showLoginModal}
        setIsVisible={setShowLoginModal}
        data={{
          email,
          name,
          phoneNumber: activeData.dialCode + phoneNumber,
        }}
      />
    </GeneralView>
  );
};
