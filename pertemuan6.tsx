import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardScreen from './components/DashboardScreen';
import AboutScreen from './components/AboutScreen';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState('dashboard');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* Navigasi Bilah Atas */}
        <Header
          title={activeScreen}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />

        {/* Pergantian Layar Berdasarkan State */}
        <View style={styles.content}>
          {activeScreen === 'dashboard' ? <DashboardScreen /> : <AboutScreen />}
        </View>

        {/* Menu Laci Samping */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#16343A',
  },
  content: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});