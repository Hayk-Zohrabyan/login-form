import React, { useMemo, Fragment, useState, FunctionComponent } from 'react';
import { TextInput, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import { View, ViewProps } from '../Views';
import { Text } from '../Text';
import { theme, moderateScale } from 'styles';

export interface InputProps extends TextInputProps {
  error?: string;
  isChat?: boolean;
  isTextArea?: boolean;
  forwardedRef?: React.Ref<TextInput>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: FunctionComponent<InputProps> = ({
  isChat,
  isTextArea,
  error,
  forwardedRef,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const [isBlur, setIsBlur] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const renderStyle = useMemo(() => {
    const styles: {
      view: ViewStyle;
      input: ViewStyle & TextStyle;
      showAndHide: ViewProps;
    } = {
      view: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: moderateScale(8),
        borderColor: theme.colors.baliHai,
      },
      input: {
        backgroundColor: 'transparent',
        color: theme.colors.ebonyClay,
        borderRadius: moderateScale(8),
        height: moderateScale(52),
        fontSize: moderateScale(20),
        paddingLeft: moderateScale(12),
        paddingRight: moderateScale(12),
        flex: 1,
      },
      showAndHide: {
        width: 48,
        height: 48,
        jc: 'center',
        ai: 'center',
        ph: 12,
        // bg: theme.colors.alabaster,
        bg: 'transparent',
        br: 8,
      },
    };

    if (isChat) {
      styles.view.backgroundColor = theme.colors.white;
      styles.view.borderRadius = moderateScale(32);
    }

    if (isTextArea) {
      styles.input.height = moderateScale(125);
    }

    return styles;
  }, [error, isBlur, props.multiline, isChat, isTextArea]);

  return (
    <Fragment>
      <View style={renderStyle.view}>
        {leftIcon}
        <TextInput
          secureTextEntry={false}
          autoCorrect={false}
          onFocus={() => setIsBlur(true)}
          onBlur={() => setIsBlur(false)}
          style={renderStyle.input}
          placeholderTextColor={theme.colors.baliHai}
          ref={forwardedRef}
          {...props}
        />

        {rightIcon}
      </View>
      {!!error && (
        <View pt={5} pl={10}>
          <Text fs={13} color={theme.colors.amaranth}>
            {error}
          </Text>
        </View>
      )}
    </Fragment>
  );
};

export const InputRef = React.forwardRef((props: InputProps, ref?: React.Ref<TextInput>) => (
  <Input {...props} forwardedRef={ref} />
));

Input.defaultProps = {
  error: '',
  autoCapitalize: 'none',
  multiline: false,
};
