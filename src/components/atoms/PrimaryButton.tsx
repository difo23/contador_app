import React from 'react';
import {Pressable, Text} from 'react-native';
import {appStyles} from '../../styles/AppStyles';

interface Props {
  buttonTitle: string;
  onPressed: () => void;
}

const PrimaryButton = ({buttonTitle, onPressed}: Props) => {
  return (
    <Pressable style={appStyles.button} onPress={onPressed}>
      <Text style={appStyles.text}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
