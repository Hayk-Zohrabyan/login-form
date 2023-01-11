import React, { FunctionComponent } from 'react';
import { View, Modal, Input } from '../../uiKit';
import { CountryPhoneList } from '../../Lists';
import { theme } from 'styles';
import { CountryPhoneDProps } from 'types';
import countryData from './data';

interface CountryPhoneModalProps {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  searchText: string;
  setSearchText: (arg: string) => void;
  activeCountryPhone: CountryPhoneDProps;
  setActiveCountryPhone: (arg: CountryPhoneDProps) => void;
}

export const CountryPhoneModal: FunctionComponent<CountryPhoneModalProps> = ({
  isVisible,
  setIsVisible,
  searchText,
  setSearchText,
  activeCountryPhone,
  setActiveCountryPhone,
}) => (
  <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
    <View br={16} bg={theme.colors.alabaster} height={300} width={300}>
      <View mt={20} ph={20} br={16}>
        <Input
          autoCapitalize="sentences"
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search your country"
        />
      </View>

      <CountryPhoneList
        activeItem={activeCountryPhone}
        data={countryData.filter(
          item =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.dialCode.includes(searchText),
        )}
        onCountryPhone={setActiveCountryPhone}
      />
    </View>
  </Modal>
);
