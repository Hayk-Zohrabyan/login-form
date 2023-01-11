import React, { FunctionComponent, useMemo } from 'react';
import { TouchableView, ViewProps } from '../Views';
import { Text, TextProps } from '../Text';
import { theme } from 'styles';

interface ButtonProps extends ViewProps {
  isLight?: boolean;
  isRed?: boolean;
  isWhite?: boolean;
  disabled?: boolean;
  loaderSize?: number;
  activeOpacity?: number;
  label: string;
  onPress: () => void;
  color?: string;
  fs?: number;
}

interface ButtonStyleProps {
  view: ViewProps;
  text: TextProps;
  loaderColor: string;
  loaderSize: number;
}

export const Button: FunctionComponent<ButtonProps> = ({
  color,
  fs,
  loaderSize,
  label,
  children,
  disabled,
  onPress,
  activeOpacity,
  ...props
}) => {
  const renderStyle = useMemo((): ButtonStyleProps => {
    const style: ButtonStyleProps = {
      view: {
        br: 8,
        height: 52,
        bw: 2,
        jc: 'center',
        ai: 'center',
        fd: 'row',
        bg: theme.colors.ebonyClay,
        bc: theme.colors.ebonyClay,
        ...props,
      },
      text: {
        fs: fs || 20,
        color: color || theme.colors.white,
        workSansMedium: true,
      },
      loaderColor: theme.colors.white,
      loaderSize: loaderSize!,
    };

    if (props.isLight) {
      style.view.bg = theme.colors.trout;
      style.view.bc = theme.colors.trout;
    }

    if (props.isWhite) {
      style.view.bg = theme.colors.alabaster;
      style.view.bc = theme.colors.ebonyClay;
      style.text.color = theme.colors.ebonyClay;
      style.loaderColor = theme.colors.ebonyClay;

      if (props.isLight) {
        style.view.bc = theme.colors.trout;
        style.text.color = theme.colors.trout;
        style.loaderColor = theme.colors.trout;
      }
    }

    if (props.isRed) {
      style.view.bg = theme.colors.amaranth;
      style.view.bc = theme.colors.amaranth;
    }

    if (disabled) {
      style.view.bg = theme.colors.baliHai;
      style.view.bc = theme.colors.baliHai;
    }

    return { ...style, view: { ...style.view }, text: { ...style.text } };
  }, [props, disabled, loaderSize, color, fs]);

  return (
    <TouchableView
      activeOpacity={activeOpacity || (disabled ? 1 : 0.2)}
      onPress={() => !disabled && onPress()}
      {...renderStyle.view}
    >
      <Text {...renderStyle.text}>{label}</Text>
    </TouchableView>
  );
};

Button.defaultProps = {
  disabled: false,
  loaderSize: 8,
};
