import { StyleSheet } from 'react-native';
import { moderateScale } from 'styles';
import { ImageProps } from './types';

export const renderStyle = (props: ImageProps): { image: object } => {
  const imageStyle: ImageProps = {};
  props.tintColor && (imageStyle.tintColor = props.tintColor);

  typeof props.borderRadius === 'number' && (imageStyle.borderRadius = props.borderRadius);
  if (props.width) {
    typeof props.width === 'string' && (imageStyle.width = props.width);
    typeof props.width === 'number' && (imageStyle.width = moderateScale(props.width));
  }
  if (props.height) {
    typeof props.height === 'string' && (imageStyle.height = props.height);
    typeof props.height === 'number' && (imageStyle.height = moderateScale(props.height));
  }

  return StyleSheet.create({
    image: {
      ...imageStyle,
      ...props.style,
    },
  });
};
