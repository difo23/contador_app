import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  iconSize: number;
  iconcolor: string;
}

const Icon = ({iconName, iconSize, iconcolor}: Props) => {
  return <Ionicons name={iconName} size={iconSize} color={iconcolor} />;
};

export default Icon;
