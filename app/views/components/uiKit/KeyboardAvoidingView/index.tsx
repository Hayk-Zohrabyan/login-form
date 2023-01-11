import React, { Fragment, FunctionComponent, useMemo } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView as BseKeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { isIOS, statusBarHeight } from 'utils';
import { View } from '../Views';

const FLEX_GROW = 1;

interface KeyboardAvoidingProps {
  isTouch?: boolean;
}

export const KeyboardAvoidingView: FunctionComponent<KeyboardAvoidingProps> = ({
  children,
  isTouch,
}) => {
  const content = useMemo(
    () => (
      <TouchableWithoutFeedback onPress={() => isTouch && Keyboard.dismiss()}>
        <View flex={1}>{children}</View>
      </TouchableWithoutFeedback>
    ),
    [children, isTouch],
  );

  return (
    <Fragment>
      {isIOS ? (
        <BseKeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={statusBarHeight}
          style={{ flexGrow: FLEX_GROW }}
        >
          {content}
        </BseKeyboardAvoidingView>
      ) : (
        content
      )}
    </Fragment>
  );
};

KeyboardAvoidingView.defaultProps = {
  isTouch: true,
};
