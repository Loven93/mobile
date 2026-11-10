import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface DashboardScreenProps {
  onOpenSidebar?: () => void;
}

export default function DashboardScreen({ onOpenSidebar }: DashboardScreenProps) {
  // Data array menu agar render otomatis menggunakan .map()
  const menuItems = [
    { id: 1, title: 'My Account', icon: '👤' },
    { id: 2, title: 'Inventory', icon: '🚚' },
    { id: 3, title: 'Search Mechanic', icon: '🔧' },
    { id: 4, title: 'Request', icon: '📄' },
    { id: 5, title: 'Analytics', icon: '📈' },
    { id: 6, title: 'Contact us', icon: '🏠' },
  ];

  return (
    <View style={styles.mainContainer}>
      {/* 1. Header Biru Atas */}
      <View style={styles.headerArea}>
        <TouchableOpacity style={styles.burgerBtn} onPress={onOpenSidebar}>
          <Text style={styles.burgerIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* 2. Lembar Putih Melengkung (Body Container) */}
      <View style={styles.bodyContainer}>
        <ScrollView
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}
        >
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.7}>
              <View style={styles.iconWrapper}>
                <Text style={styles.iconText}>{item.icon}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0c3b82', // Warna biru tua header
  },
  headerArea: {
    height: 140, // Ruang untuk background biru
    paddingTop: 16,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  burgerBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  burgerIcon: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: -30, // Menumpuk ke atas area biru
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 35,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#f8fafc',
    width: '47%',
    height: 110,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    // Efek shadow iOS & Android
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  iconWrapper: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 26,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#334155',
    textAlign: 'center',
  },
});