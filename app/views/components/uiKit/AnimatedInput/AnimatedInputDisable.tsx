import React, { FunctionComponent } from 'react';
import { theme } from 'styles';
import { View } from '../Views';
import { isAndroid } from 'utils';
import { Text } from '../Text';
import { ReactChildren } from 'types';

interface AnimatedInputDisableProps extends ReactChildren {
  label: string;
  value: string;
}

export const AnimatedInputDisable: FunctionComponent<AnimatedInputDisableProps> = ({
  children,
  ...props
}) => (
  <View bw={1} br={8} bc={theme.colors.baliHai} fd="row" height={52} ai="center" bg="transparent">
    <View height={52} jc="center" flex={1} ph={12}>
      <View zi={1} width="auto" position="absolute" top={isAndroid ? -12 : -10} left={7} ph={5}>
        <View width="auto" mr={5}>
          <Text noirProRegular color={theme.colors.ebonyClay} fs={13}>
            {props.label}
          </Text>
        </View>
        <View
          zi={-1}
          position="absolute"
          bottom={isAndroid ? 5 : 3}
          left={1}
          height={3}
          bg={theme.colors.alabasterLite}
        />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        fs={20}
        noirProLight
        color={theme.colors.ebonyClay}
      >
        {props.value}
      </Text>
    </View>
    <View width="auto" height="100%" fd="row">
      {children}
    </View>
  </View>
);
