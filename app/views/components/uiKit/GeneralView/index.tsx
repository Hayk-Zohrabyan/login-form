import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { theme } from 'styles';
import { bottomSpace, isIOS, ScreenHeight } from 'utils';
import { View, ViewProps } from '../Views';

export const GeneralView: FunctionComponent<ViewProps> = ({ children, ...props }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <View {...props} position="relative" flex={1}>
      {children}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    height: isIOS ? ScreenHeight + bottomSpace : 'auto',
    flex: isIOS ? 0 : 1,
    backgroundColor: theme.colors.white,
  },
});

GeneralView.defaultProps = {};
