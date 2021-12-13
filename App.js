import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start with')
  const changeText = () => {
    setOutputText('Yaa! The text has been changed.')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{outputText}</Text>
      <Button title='first button' onPress={changeText} />
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
