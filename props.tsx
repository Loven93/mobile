import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Homepage from './Homepage';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <Homepage namaprop="Marthin" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}