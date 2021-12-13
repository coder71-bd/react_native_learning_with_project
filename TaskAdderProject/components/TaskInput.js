import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TaskInput = ({ handleInputTask, enteredTask }) => {
  return (
    <TextInput
      placeholder="enter your task"
      style={styles.inputContainer}
      onChangeText={handleInputTask}
      value={enteredTask}
    />
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: '70%',
    borderColor: 'pink',
    borderWidth: 2,
    padding: 3,
  },
});

export default TaskInput;
