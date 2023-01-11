import React, { useCallback, useEffect, useMemo, useState, Fragment } from 'react';
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  View,
  Text,
} from 'react-native';
import { theme, moderateScale } from 'styles';

export interface TextInputProps extends RNTextInputProps {
  /**
   * The label to display.
   */
  label?: string;

  /**
   * The placeholder to display.
   */
  placeholder?: string;

  /**
   * The isError to display.
   */
  error?: string;

  /**
   * The isPassword to display password type TextInput.
   */
  isPassword?: boolean;

  /**
   * The isRequired to display required.
   */
  isRequired?: boolean;
}

export const AnimatedInput: React.FC<TextInputProps> = React.forwardRef(
  ({ label, placeholder, onFocus, onBlur, isRequired, ...props }, ref: React.Ref<RNTextInput>) => {
    const [isShow, setIsShow] = useState(false);
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocus?.(event);
        setFocused(true);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(event);
        setFocused(false);
      },
      [onBlur],
    );

    const focusAnimation = useMemo(() => new Animated.Value(0), []);

    useEffect(() => {
      Animated.timing(focusAnimation, {
        toValue: focused ? 1 : 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }, [focused]);

    const active = useMemo(
      () => !!placeholder || focused || (props.value?.length || 0) > 0,
      [focused, props.value, placeholder],
    );

    const activeAnimation = useMemo(() => new Animated.Value(active ? 1 : 0), []);

    useEffect(() => {
      Animated.timing(activeAnimation, {
        toValue: active ? 1 : 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }, [active]);

    return (
      <Fragment>
        <View style={styles.inputContainer}>
          <RNTextInput
            secureTextEntry={false}
            ref={ref}
            autoCorrect={false}
            style={[styles.input, { paddingEnd: moderateScale(13) }]}
            placeholder={placeholder}
            onFocus={handleFocus}
            placeholderTextColor={theme.colors.baliHai}
            onBlur={handleBlur}
            {...props}
          />

          <View
            style={[
              StyleSheet.absoluteFill,
              styles.outline,
              props.error ? { borderColor: theme.colors.amaranth } : {},
            ]}
            pointerEvents="none"
          />

          {label && (
            <View style={styles.labelContainer} pointerEvents="none">
              <Animated.View
                style={[styles.outlineLabelGap, { transform: [{ scaleX: activeAnimation }] }]}
              />
              <Animated.Text
                style={[
                  placeholder
                    ? [
                        styles.animatedText,
                        {
                          transform: [
                            {
                              translateY: moderateScale(-28),
                            },
                          ],
                        },
                      ]
                    : {
                        color: focusAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [theme.colors.ebonyClay, theme.colors.ebonyClay],
                        }),
                        fontSize: activeAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [moderateScale(20), moderateScale(12)],
                        }),
                        transform: [
                          {
                            translateY: activeAnimation.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, moderateScale(-28)],
                            }),
                          },
                        ],
                      },
                ]}
              >
                {label}
                {isRequired ? <Text style={styles.requiredText}>*</Text> : null}
              </Animated.Text>
            </View>
          )}
        </View>

        {!!props.error && (
          <View style={styles.errorView}>
            <Text style={styles.errorText}>{props.error}</Text>
          </View>
        )}
      </Fragment>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: theme.colors.alabaster,
    backgroundColor: 'transparent',
  },
  input: {
    fontSize: moderateScale(20),
    flex: 1,
    minHeight: moderateScale(54),
    paddingStart: moderateScale(13),
    color: theme.colors.ebonyClay,
  },
  animatedText: {
    fontSize: moderateScale(12),
  },
  outline: {
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: theme.colors.baliHai,
  },
  outlineLabelGap: {
    position: 'absolute',
    top: 0,
    start: -3,
    end: -3,
    height: 2,
    backgroundColor: theme.colors.alabasterLite,
  },
  labelContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    start: moderateScale(13),
    height: moderateScale(54),
  },

  eyeImage: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  eyeTouchable: {
    width: moderateScale(48),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    backgroundColor: theme.colors.alabaster,
    borderRadius: moderateScale(8),
  },

  requiredText: {
    color: theme.colors.amaranth,
  },

  errorView: {
    marginTop: moderateScale(5),
    paddingLeft: moderateScale(10),
  },
  errorText: {
    fontSize: moderateScale(13),
    color: theme.colors.amaranth,
  },
});

AnimatedInput.defaultProps = {
  autoCapitalize: 'none',
  multiline: false,
};
