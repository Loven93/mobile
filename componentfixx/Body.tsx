import { View, Text, Button } from 'react-native';
import React from 'react';

// Tentukan tipe data props
interface BodyProps {
  stateArray?: { id: number; name: string }[];
  nama?: string;
  fungsi?: (val: any) => void;
}

const Body = (props: BodyProps) => {
  console.log(props.stateArray);

  const clicked = () => {
    if (props.fungsi && props.stateArray) {
      props.fungsi([...props.stateArray, { id: 4, name: 'Radit' }]);
    }
  };

  return (
    <View
      style={{
        height: '50%',
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>bo</Text>

      {props.stateArray?.map((v, i) => (
        <View key={i}>
          <Text style={{ fontSize: 40 }}>{v.name}</Text>
        </View>
      ))}

      <Text>{props.nama}</Text>
      <Button title="klik disini" onPress={clicked} color="#ff416d" />
    </View>
  );

};

export default Body;