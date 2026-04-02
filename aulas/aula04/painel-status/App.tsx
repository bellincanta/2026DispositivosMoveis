import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import StatusPainel from './src/components/StatusPainel';
import { styles } from './src/styles/statusStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <StatusPainel />
    </SafeAreaView>
  );
}