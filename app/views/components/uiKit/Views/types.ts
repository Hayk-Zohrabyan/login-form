import { ViewProps as BaseViewProps } from 'react-native';

export interface ViewProps extends BaseViewProps {
  pv?: number | string; // paddingVertical
  ph?: number | string; // paddingHorizontal
  pl?: number | string; // paddingLeft
  pr?: number | string; // paddingRight
  pt?: number | string; // paddingTop
  pb?: number | string; // paddingBottom

  mv?: number | string; // marginVertical
  mh?: number | string; // marginHorizontal
  ml?: number | string; // marginLeft
  mr?: number | string; // marginRight
  mt?: number | string; // marginTop
  mb?: number | string; // marginBottom

  bc?: string; // borderColor
  bw?: number; // borderWidth
  br?: number; // borderRadius

  width?: string | number; // width
  height?: string | number; // height

  top?: number; // top
  bottom?: number; // bottom
  left?: number; // left
  right?: number; // right

  bg?: string; // backgroundColor
  fd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; // flexDirection
  jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; // justifyContent
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'; // alignItems
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // textAlign
  fw?: 'wrap' | 'nowrap'; // flexWrap
  position?: 'absolute' | 'relative'; // position
  flex?: number; // flex
  opacity?: number; // opacity
  zi?: number; // zIndex
}

export interface ViewStyleProps {
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;

  marginVertical?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;

  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;

  width?: number | string;
  height?: number | string;

  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  backgroundColor?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  position?: 'absolute' | 'relative';
  flex?: number;
  opacity?: number;
  zIndex?: number;
}
