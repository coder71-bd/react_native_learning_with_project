import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TaskItem = ({ item, onDelete }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={onDelete} activeOpacity={0.7}><Text style={styles.deleteBtn}>delete</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
    fontSize: 16,
    color: '#fff'
  }
});

export default TaskItem;
