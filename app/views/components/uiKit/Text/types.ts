import { TextProps as BaseTextProps } from 'react-native';

export interface TextProps extends BaseTextProps {
  color?: string;
  noirProBold?: boolean;
  noirProSemiBold?: boolean;
  noirProMedium?: boolean;
  noirProRegular?: boolean;
  noirProLight?: boolean;
  workSansBold?: boolean;
  workSansSemiBold?: boolean;
  workSansMedium?: boolean;
  workSansRegular?: boolean;
  workSansLight?: boolean;

  fw?: string; // fontWeight
  fs?: number; // fontSize
  lh?: number; // lineHeight

  td?: 'none' | 'underline' | 'line-through' | 'underline line-through'; // textDecorationLine
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // textAlign
}
