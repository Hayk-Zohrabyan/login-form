import React, { Fragment, FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ViewProps } from './types';
import { ReactChildren } from 'types';
import { renderStyle } from './styles';

export const TouchableView: FunctionComponent<
  ViewProps & TouchableOpacityProps & ReactChildren
> = ({ children, onPress, activeOpacity, ...props }) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    style={[renderStyle(props).view, props.style]}
    onPress={onPress}
  >
    <Fragment>{children}</Fragment>
  </TouchableOpacity>
);

TouchableView.defaultProps = {
  width: '100%',
  activeOpacity: 0.2,
};
