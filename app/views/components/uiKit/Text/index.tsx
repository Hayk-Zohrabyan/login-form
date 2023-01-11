import React, { FunctionComponent } from 'react';
import { Text as BaseText } from 'react-native';
import { TextProps } from './types';
import { renderStyle } from './styles';

export const Text: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <BaseText
    {...(props.numberOfLines ? { numberOfLines: props.numberOfLines } : {})}
    {...(props.ellipsizeMode ? { ellipsizeMode: props.ellipsizeMode } : {})}
    style={[renderStyle(props).text, props.style]}
  >
    {children}
  </BaseText>
);

Text.defaultProps = {
  noirProLight: true,
  fs: 12,
};

export { TextProps };
