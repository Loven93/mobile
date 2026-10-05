// import React from 'react';
//
// const getFullName = (
//   firstName: string,
//   secondName: string,
//   thirdName: string,
// ) => {
//   return firstName + ' ' + secondName + ' ' + thirdName;
// };
//
// const Cat = () => {
//   return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>;
// };
//
// export default Cat;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halo Mobile Developer!</Text>
      <Text style={styles.subtitle}>Komponen native perdana Anda.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#040505' },
  subtitle: { fontSize: 14, color: '#fcfdff', marginTop: 4 },
});