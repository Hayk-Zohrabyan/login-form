import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from 'views/screens/AuthStack';

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const AuthStack = createNativeStackNavigator();
export const AuthScreens = (): React.ReactElement => (
  <AuthStack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
  </AuthStack.Navigator>
);
