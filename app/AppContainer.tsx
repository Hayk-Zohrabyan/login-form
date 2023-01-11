import React, { FunctionComponent } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PopUpMessage } from 'components';
import { popUpMessageRef } from 'services/popUpMessage';
import { AuthScreens } from 'navigation';
import { navigationRef } from 'utils';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

export const AppContainer: FunctionComponent = () => {
  const Navigation = AuthScreens;
  // if (user.accessToken) {
  //   Api.setAccessToken(user.accessToken);
  //   user.initialRouteName === 'HomeScreen' && (Navigation = HomeScreens);
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigation />
      <PopUpMessage ref={popUpMessageRef} />
    </NavigationContainer>
  );
};
