import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PaddleConditions from './api/wind_weather'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This paddling app is going to kick ass!</Text>
      <PaddleConditions />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
