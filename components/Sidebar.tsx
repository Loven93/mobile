import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  activeScreen,
  setActiveScreen,
}: SidebarProps) {
  const handleNav = (screen: string) => {
    setActiveScreen(screen);
    onClose();
  };

  return (
    <Modal visible={isOpen} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        {/* Area gelap luar untuk menutup sidebar saat disentuh */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        {/* Panel Sidebar */}
        <View style={styles.drawer}>
          {/* Header Profil Singkat */}
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>M</Text>
            </View>
            <Text style={styles.profileName}>Marthin</Text>
            <Text style={styles.profileRole}>Teknik Informatika</Text>
          </View>

          {/* Menu Navigasi */}
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={[
                styles.menuItem,
                activeScreen === 'dashboard' && styles.menuItemActive,
              ]}
              onPress={() => handleNav('dashboard')}
            >
              <Text
                style={[
                  styles.menuText,
                  activeScreen === 'dashboard' && styles.menuTextActive,
                ]}
              >
                📊 Dashboard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.menuItem,
                activeScreen === 'about' && styles.menuItemActive,
              ]}
              onPress={() => handleNav('about')}
            >
              <Text
                style={[
                  styles.menuText,
                  activeScreen === 'about' && styles.menuTextActive,
                ]}
              >
                ℹ️ About
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tombol Tutup di Bawah */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>Tutup Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  drawer: {
    width: '75%',
    maxWidth: 300,
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 20,
    justifyContent: 'space-between',
    elevation: 16,
  },
  profileSection: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#16343A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  profileRole: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  menuContainer: {
    flex: 1,
    marginTop: 24,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuItemActive: {
    backgroundColor: '#e0f2fe',
  },
  menuText: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
  menuTextActive: {
    color: '#0284c7',
    fontWeight: 'bold',
  },
  closeBtn: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  closeBtnText: {
    color: '#64748b',
    fontWeight: '600',
  },
});