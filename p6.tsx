import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function App() {
  // Array 1 dimensi
  const angka = [10, 20, 30, 40, 50, 60];

  // State index untuk perpindahan posisi array
  const [index, setIndex] = useState(0);

  const variableString = 'Aku cinta INDONESIA';
  const [nilaiString, setnilaiString] = useState(variableString);

  const [stateObject, setStateObject] = useState({
    nama: 'Unipda',
    tahun: 2026,
  });

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const updateField = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const pindahArray = () => {
    setIndex((prevIndex) => (prevIndex + 1) % angka.length);
  };

  const ubah = () => {
    setStateObject({
      nama: 'Universitas PGRI Delta',
      tahun: 2027,
    });
  };

  return (
    <View style={style.container}>
      {/* Menampilkan isi array berdasarkan indeks saat ini */}
      <Text style={style.subtitle}>{angka[index]}</Text>

      {/* Menampilkan nomor indeks aktif */}
      <Text style={style.subtitle}>Indeks ke: {index}</Text>
      <Text style={style.subtitle}>{nilaiString}</Text>
      <Text style={style.subtitle}>{stateObject.nama}</Text>
      <Text style={style.subtitle}>{stateObject.tahun}</Text>

      {/* Form Input */}
      <View style={style.formContainer}>
        <TextInput
          style={style.input}
          value={form.name}
          onChangeText={(v) => updateField('name', v)}
        />
        <TextInput
          style={style.input}
          value={form.email}
          onChangeText={(v) => updateField('email', v)}
        />
      </View>

      <View style={style.buttonGroup}>
        {/* Tombol perpindahan elemen array */}
        <Button
          title="Pindah Array"
          color="#841584"
          onPress={pindahArray}
        />

        <Button
          title="Ubah Data"
          color="#1e90ff"
          onPress={ubah}
        />

        <Button
          title={show ? 'Sembunyikan' : 'Tampilkan'}
          color="#008080"
          onPress={() => setShow(!show)}
        />

        {show && (
          <Text style={style.infoText}>
            Rahasia perusahaan tampil di sini!
          </Text>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 2,
    textAlign: 'center',
  },
  formContainer: {
    width: '80%',
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    fontSize: 16,
  },
  buttonGroup: {
    marginTop: 15,
    width: '60%',
    gap: 8,
  },
  infoText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#333',
  },
});