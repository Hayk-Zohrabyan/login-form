import React, { FunctionComponent, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View } from '../Views';
import { KeyboardAvoidingView } from '../KeyboardAvoidingView';
import BaseModal from 'react-native-modal';
import { theme } from 'styles';

interface ModalProps {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  isTop?: boolean;
  isSwipeable?: boolean;
  isBottom?: boolean;
}

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isVisible,
  setIsVisible,
  isTop,
  isBottom,
  isSwipeable,
}) => {
  const justifyContent = useMemo(() => {
    if (isBottom) {
      return 'flex-end';
    }
    if (isTop) {
      return 'flex-start';
    }
    return 'center';
  }, [isBottom, isTop]);

  return (
    <BaseModal
      {...(isSwipeable
        ? { swipeDirection: 'down', onSwipeComplete: () => setIsVisible(false) }
        : {})}
      statusBarTranslucent
      style={styles.modal}
      isVisible={isVisible}
      backdropOpacity={0.5}
      backdropColor={theme.colors.black}
      animationInTiming={500}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      coverScreen
    >
      <KeyboardAvoidingView>
        <View flex={1} ai="center" jc={justifyContent}>
          <Pressable style={[StyleSheet.absoluteFill]} onPress={() => setIsVisible(false)} />
          {children}
        </View>
      </KeyboardAvoidingView>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    zIndex: 100,
  },
});

Modal.defaultProps = {
  isTop: false,
  isBottom: false,
};
