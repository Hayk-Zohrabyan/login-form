import React, { FunctionComponent } from 'react';
import { Text, TouchableView, View, Image } from '../../uiKit';
import { CountryPhoneDProps } from 'types';

interface CountryPhoneCardProps {
  item: CountryPhoneDProps;
  activeItem: CountryPhoneDProps;
  onPressCard: (arg: CountryPhoneDProps) => void;
}

export const CountryPhoneCard: FunctionComponent<CountryPhoneCardProps> = ({
  activeItem,
  item,
  onPressCard,
}) => (
  <View ph={20}>
    <TouchableView ai="center" pv={15} fd="row" onPress={() => onPressCard(item)}>
      {item.uri && (
        <View width={23} height={16} mr={10}>
          <Image source={item.uri} />
        </View>
      )}
      <View flex={1} pr={10}>
        {item.name && (
          <Text
            fs={16}
            numberOfLines={1}
            noirProLight={activeItem.code !== item.code}
            noirProSemiBold={activeItem.code === item.code}
          >
            {item.name}
          </Text>
        )}
      </View>
      {item.dialCode && (
        <Text
          fs={16}
          numberOfLines={1}
          noirProLight={activeItem.code !== item.code}
          noirProSemiBold={activeItem.code === item.code}
        >
          {item.dialCode}
        </Text>
      )}
    </TouchableView>
  </View>
);
