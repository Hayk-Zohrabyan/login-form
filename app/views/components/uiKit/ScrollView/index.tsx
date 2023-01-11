import React, { Fragment, FunctionComponent } from 'react';
import { ScrollView as BaseScrollView, ScrollViewProps as BaseScrollViewProps } from 'react-native';

const FLEX_GROW = 1;

interface ScrollViewProps extends BaseScrollViewProps {
  forwardedRef?: React.Ref<BaseScrollView>;
}

export const ScrollView: FunctionComponent<ScrollViewProps> = React.memo(
  ({ forwardedRef, children, ...props }) => (
    <BaseScrollView
      ref={forwardedRef}
      centerContent
      contentContainerStyle={{ flexGrow: FLEX_GROW }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      {...props}
    >
      <Fragment>{children}</Fragment>
    </BaseScrollView>
  ),
);

export const ScrollViewRef = React.forwardRef(
  (props: BaseScrollViewProps, ref?: React.Ref<BaseScrollView>) => (
    <ScrollView forwardedRef={ref} {...props} />
  ),
);

ScrollView.defaultProps = {
  keyboardDismissMode: 'none',
};

export { BaseScrollView, BaseScrollViewProps };
