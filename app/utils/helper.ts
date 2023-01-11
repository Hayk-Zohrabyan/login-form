import { Platform, Dimensions, Keyboard } from 'react-native';
import { getBottomSpace, ifIphoneX, isIphoneX as IsIphoneX } from 'react-native-iphone-x-helper';
import { getRealWindowHeight, getStatusBarHeight } from 'react-native-extra-dimensions-android';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isIphoneX = IsIphoneX();
export const bottomSpace = getBottomSpace();
export const statusBarHeight = isIOS ? ifIphoneX(44, 20) : getStatusBarHeight();

const Screen = Dimensions.get('window');
export const ScreenWidth = Screen.width;
export const ScreenHeight = isIOS ? Screen.height : getRealWindowHeight();
export const KeyboardDismiss: () => void = () => Keyboard.dismiss();
export const MAX_HEIGHT = ScreenHeight - statusBarHeight - (isAndroid ? 50 : isIphoneX ? -13 : 2);
export const MIN_HEIGHT = 0;
