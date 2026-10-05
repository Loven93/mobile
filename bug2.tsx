// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function CardDemo() {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.heading}>Kartu Profil</Text>
//       <Text style={styles.body}>Styling native teroganisir rapi</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { backgroundcolor: '#fffff', padding: 20, borderRadius: 12 },
//   heading: { fontSize: 18, fontWeight: 'bold', color: '#e60000' },
//   body: { fontSize: 14, color: '#fcfdff', marginTop: 6 },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// export default function RowLayoutDemo() {
//   return (
//     <View style={styles.row}>
//       <View style={[styles.box, { backgroundColor: '#fc0909' }]}>
//         <Text style={styles.label}>Kolom 1</Text>
//       </View>
//       <View style={[styles.box, { backgroundColor: '#0066ff' }]}>
//         <Text style={styles.label}>Kolom 2</Text>
//       </View>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     gap: 12,
//     padding: 16
//   },
//   box: {
//     flex: 1,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8
//   },
//   label: {
//     color: '#ffffff',
//     fontWeight: 'bold'
//   },
// });


import React from 'react';
import { View, Pressable, Text, StyleSheet, Alert } from 'react-native';

export default function ButtonDemo() {
  return (
    <View style={styles.center}>
      <Pressable
        onPress={() => Alert.alert('Sukses', 'Data tersimpan!')}
        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.7 : 1 }]}
      >
        <Text style={styles.btnText}>Kirim Formulir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  btn: { backgroundColor: '#2563eb', padding: 14, borderRadius: 8 },
  btnText: { color: '#ffffff', fontWeight: 'bold' },
});