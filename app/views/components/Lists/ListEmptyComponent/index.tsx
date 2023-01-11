import React, { FunctionComponent } from 'react';
import { Text, View } from '../../uiKit';

export const ListEmptyComponent: FunctionComponent<{ upText: string; downText?: string }> = ({
  upText,
  downText,
}) => (
  <View ai="center" mt={50}>
    <Text workSansSemiBold fs={20}>
      {upText}
    </Text>
    {downText && (
      <Text noirProRegular fs={16}>
        {downText}
      </Text>
    )}
  </View>
);
