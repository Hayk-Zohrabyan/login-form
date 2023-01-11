import React, { FunctionComponent, useCallback } from 'react';
import { FlatList } from '../../uiKit';
import { CountryPhoneCard } from '../../Cards';
import { CountryPhoneDProps } from 'types';
import { ListEmptyComponent } from '../ListEmptyComponent';

interface CountryPhoneListProps {
  data: CountryPhoneDProps[];
  activeItem: CountryPhoneDProps;
  onCountryPhone: (arg: CountryPhoneDProps) => void;
}

export const CountryPhoneList: FunctionComponent<CountryPhoneListProps> = ({
  onCountryPhone,
  data,
  activeItem,
}) => {
  const flatListRenderItem = useCallback(
    ({ item, index }: { item: CountryPhoneDProps; index: number }) => (
      <CountryPhoneCard onPressCard={onCountryPhone} item={item} activeItem={activeItem} />
    ),
    [activeItem, data],
  );

  const emptyRenderItem = useCallback(() => <ListEmptyComponent upText="Here empty" />, []);

  return (
    <FlatList
      extraData={data}
      data={data}
      ListEmptyComponent={emptyRenderItem}
      keyExtractor={(item: CountryPhoneDProps) => `${item.code + item.dialCode}`}
      renderItem={flatListRenderItem}
    />
  );
};
