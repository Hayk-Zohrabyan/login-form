import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { CountryPhoneDProps } from 'types';
import { View, Image, Text, TouchableView } from '../uiKit';
import { theme, moderateScale } from 'styles';
import { isAndroid } from 'utils';

export type OnChangeNATypes = {
  phoneNumber: string;
  isCorrectNumber: boolean;
  dialCode?: string;
};

interface CountryPhoneInputProps {
  activeData: CountryPhoneDProps;
  openModal: () => void;

  value: string;
  onChangeNumber: (arg: OnChangeNATypes) => void;
  error: string;
}

export const CountryPhoneInput: FunctionComponent<CountryPhoneInputProps> = ({
  value,
  activeData,
  onChangeNumber,
  error,
  openModal,
}) => {
  const correctMask = useMemo(() => {
    return activeData.inputMask
      .split(' ')
      .map((item, index) => {
        let newItem = item;
        if (index === 0) {
          newItem = `(${newItem})`;
        }
        if (index === 1) {
          newItem = ` ${newItem}`;
        }
        if (index > 1) {
          newItem = `-${newItem}`;
        }

        return newItem;
      })
      .join('');
  }, [activeData.inputMask]);

  const maskInput = useMemo(() => {
    return correctMask
      .replace(/[\[\]]/g, '')
      .replace(/0/g, 'd')
      .split('')
      .map(I => {
        if (I === 'd' && /\d/) {
          return /\d/;
        } else {
          return I;
        }
      });
  }, [correctMask]);

  return (
    <Fragment>
      <View
        ph={15}
        bw={1}
        br={8}
        bc={error ? theme.colors.amaranth : theme.colors.baliHai}
        jc="center"
        fd="row"
        height={52}
        ai="center"
      >
        <View zi={1} width="auto" position="absolute" top={isAndroid ? -12 : -10} left={7} ph={5}>
          <View width="auto" mr={5}>
            <Text noirProRegular>
              Phone Number<Text color={theme.colors.amaranth}>*</Text>
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

        <View width="auto" ai="center">
          <TouchableView onPress={openModal} width="auto" fd="row" ai="center">
            <View width="auto" mb={isAndroid ? 2 : 1}>
              <Text fs={20} noirProRegular>
                {activeData.dialCode}
              </Text>
            </View>
            <View width={24} height={24} ml={10}>
              <Image source={require('views/assets/icons/arrowBottomRed.png')} />
            </View>
          </TouchableView>
        </View>
        <View bg={theme.colors.baliHai} height="75%" width={1} ml={10} />

        <View flex={1} ml={10}>
          <MaskInput
            autoCorrect={false}
            placeholderTextColor={theme.colors.baliHai}
            placeholder={correctMask.replace(/[\][]/g, '')}
            style={styles.input}
            keyboardType="number-pad"
            value={value}
            onChangeText={(formatted, extracted) => {
              const correctNumberLength = correctMask.replace(/[\][]/g, '').length;
              onChangeNumber({
                dialCode: activeData.dialCode,
                isCorrectNumber: correctNumberLength === formatted.length,
                phoneNumber: extracted,
              });
            }}
            mask={maskInput}
          />
        </View>
      </View>
      {!!error && (
        <View pt={5} pl={10}>
          <Text fs={13} color={theme.colors.amaranth}>
            {error}
          </Text>
        </View>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    height: moderateScale(50),
    fontSize: moderateScale(20),
    color: theme.colors.black,
  },
});
