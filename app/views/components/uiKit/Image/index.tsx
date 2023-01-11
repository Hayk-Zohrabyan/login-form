import React, { FunctionComponent } from 'react';
import { Image as BaseImage, ImageProps as ImagePropsBase } from 'react-native';
import { ImageProps } from './types';
import { renderStyle } from './styles';

export const Image: FunctionComponent<Omit<ImagePropsBase, 'width' | 'height'> & ImageProps> = ({
  width,
  style,
  height,
  tintColor,
  ...props
}) => {
  return <BaseImage {...props} style={renderStyle({ width, height, tintColor, style }).image} />;
};

Image.defaultProps = {
  width: '100%',
  height: '100%',
};
