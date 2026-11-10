import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

const Footer = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <View
      style={[
        {
          height: '20%',
          backgroundColor: 'red', 
          justifyContent: 'center',
          alignItems: 'center',
        },
        style, 
      ]}
    >
      <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>footer</Text>
    </View>
  );
};

export default Footer;