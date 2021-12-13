import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import TaskAdderProject from './TaskAdderProject/TaskAdderProject';

export default function App() {
  return (
    <View style={styles.screen}>
      <TaskAdderProject />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
