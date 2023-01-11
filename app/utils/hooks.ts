import React, { useCallback } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation as baseUseNavigation } from '@react-navigation/native';
import { Action } from 'deox';
import { Keyboard } from 'react-native';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator, bindActionCreators } from 'redux';
import { Any } from 'types';

export const useAction = <T extends ActionCreator<Action<string>>>(action: T): T => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(action, dispatch), [dispatch]);
};

export const usePrevious = <T>(value: T): T | void => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useStaticCallback = <Params extends Any[], Result>(
  callback: (...args: Params) => Result,
): ((...args: Params) => Result) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useCallback((...args: Params) => callbackRef.current(...args), []);
};

export const useNavigation: () => NativeStackNavigationProp<{
  [key in string]: undefined | object;
}> = () => baseUseNavigation();

export const navigationRef = React.createRef<Any>();

export const asyncNavigate: (rout: string, params?: {}) => void = (rout, params = {}) => {
  Keyboard.dismiss();

  setTimeout(() => navigationRef.current && navigationRef.current.navigate(rout, params), 300);
};
