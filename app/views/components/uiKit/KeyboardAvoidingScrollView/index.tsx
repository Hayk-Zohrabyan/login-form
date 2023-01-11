import React, { Fragment, FunctionComponent } from 'react';
import { KeyboardAvoidingView, ScrollViewProps } from 'react-native';
import { isIOS } from 'utils';
import { ScrollView } from '../ScrollView';

const FLEX_GROW = 1;

interface KeyboardAvoidingScrollViewProps extends ScrollViewProps {
  keyboardOffset?: number;
}

export const KeyboardAvoidingScrollView: FunctionComponent<KeyboardAvoidingScrollViewProps> =
  React.memo(({ children, keyboardOffset, ...props }) => (
    <Fragment>
      {isIOS ? (
        <KeyboardAvoidingView
          style={{ flexGrow: FLEX_GROW }}
          keyboardVerticalOffset={keyboardOffset || 0}
          enabled
          behavior="padding"
        >
          <ScrollView {...props}>{children}</ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: FLEX_GROW }} {...props}>
          {children}
        </ScrollView>
      )}
    </Fragment>
  ));

KeyboardAvoidingScrollView.defaultProps = {};
