/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ImageSourcePropType, RefreshControlProps } from 'react-native';

export * from './rootState';
export * from './responseData';
// export * from './requestData';
export * from './enums';

export interface CountryPhoneDProps {
  dialCode: string;
  uri: ResourceType;
  code: string;
  name: string;
  inputMask: string;
}

export type ReactChildren = { children?: React.ReactNode };

export type Any = any;
export type CasesTypes = 'snakeCase' | 'camelCase';
export type ResourceType = ImageSourcePropType;
export { RefreshControlProps };
