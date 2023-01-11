import { TextProps } from 'components/uiKit/Text/types';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'styles';

export const renderStyle = (props: TextProps): { text: object } => {
  const textStyle: { fontSize?: number; lineHeight?: number; fontWight?: string } = {};

  if (props.fs) {
    textStyle.fontSize = moderateScale(props.fs);
  }
  if (props.lh) {
    textStyle.lineHeight = moderateScale(props.lh);
  }

  return StyleSheet.create({
    text: {
      color: props.color,
      fontStyle: 'normal',
      ...textStyle,
      ...(props.fw && { fontWight: props.fw }),
      ...(props.ta && { textAlign: props.ta }),
      ...(props.td && { textDecorationLine: props.td }),
    },
  });
};
