import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  buttonTitle: string;
  onPressed: () => void;
}

const PrimaryButton = ({buttonTitle, onPressed}: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPressed}>
      <Text style={styles.text}>{buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#FF6464',
    padding: 10,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
