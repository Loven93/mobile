import { View, Text } from 'react-native';
import React from 'react';

const Header = ({ user, status }: any) => {
  return (
    <View
      style={{
        height: '30%',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>header</Text>
      <Text>{user?.nama}</Text>
      <Text>{user?.usia}</Text>
      <Text>{user?.isAktif ? 'Aktif' : 'Tidak Aktif'}</Text>
      <Text>{status}</Text>
    </View>
  );
};

export default Header;