import React, { FunctionComponent } from 'react';
import { View, Modal, Text } from '../../uiKit';
import { theme } from 'styles';

interface LoginModalProps {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  data: { name: string; email: string; phoneNumber: string };
}

export const LoginModal: FunctionComponent<LoginModalProps> = ({
  isVisible,
  setIsVisible,
  data,
}) => (
  <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
    <View br={16} bg={theme.colors.alabaster} height={300} width={300} jc="center" ph={20}>
      <Text fs={20}>Phone: {data.phoneNumber}</Text>
      <View mv={20}>
        <Text fs={20}>Name: {data.name}</Text>
      </View>
      <Text fs={20}>Email: {data.email}</Text>
    </View>
  </Modal>
);
