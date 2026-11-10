import { View, Text } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Homepage = (props: any) => {
  const [stateArray, setStateArray] = useState([
    { id: 1, name: "Ega" },
    { id: 2, name: "filla" },
    { id: 3, name: "radit" },
  ]);

  const user = {
    nama: 'Marthin',
    usia: 100,
    isAktif: true,
  };

  const [stateObject, setStateObject] = useState(user);
  
  const [footerStyle, setFooterStyle] = useState({
    backgroundColor: '#8b5cf6', 
    borderRadius: 16,
    marginHorizontal: 10,
  });

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text>Home Page {props.namaprop}</Text>
      <Header status="dipakai" user={stateObject} />
      <Body stateArray={stateArray} nama="Marthin" fungsi={setStateArray} />
      <Footer style={footerStyle} />
    </View>
  );
};

export default Homepage;