import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const ReviewModal = ({ isModalOpen, handleAddReview, handleModal }) => {
  const [inputText, setInputText] = useState('');

  const handleInput = (enteredText) => {
    setInputText(enteredText);
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.layout}>
        <TextInput
          placeholder="enter your review"
          style={styles.inputContainer}
          onChangeText={handleInput}
        />
        <View style={styles.btnContainer}>
          <View style={{ width: 80 }}>
            <Button title="cancel" onPress={handleModal} color="#ff0000" />
          </View>
          <View style={{ width: 80 }}>
            <Button title="ADD" onPress={() => handleAddReview(inputText)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  inputContainer: {
    width: '80%',
    borderColor: 'pink',
    borderWidth: 2,
    padding: 3,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
  },
});

export default ReviewModal;
