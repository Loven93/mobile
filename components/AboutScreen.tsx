import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.appName}>Mobile Task App</Text>
        <Text style={styles.version}>Versi 1.0.0 (Build 2026)</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.description}>
          Aplikasi antarmuka bergerak ini dirancang dengan komponen modular React
          Native, mengimplementasikan pengiriman props, manajemen state dinamis,
          serta drawer sidebar kustom.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Pengembang</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.value}>Marthin</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Prodi:</Text>
          <Text style={styles.value}>Informatika</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Kampus:</Text>
          <Text style={styles.value}>Universitas PGRI Delta Sidoarjo</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  version: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
});