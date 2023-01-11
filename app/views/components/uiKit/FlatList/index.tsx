import React, { FunctionComponent } from 'react';
import { FlatList as BaseFlatList, StyleSheet, FlatListProps } from 'react-native';
import { Any } from 'types';

type BaseFlatListProps = FlatListProps<Any>;

export const FlatList: FunctionComponent<BaseFlatListProps> = ({ ...props }) => (
  <BaseFlatList
    style={styles.flatList}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    {...props}
  />
);

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
    height: 'auto',
  },
});
