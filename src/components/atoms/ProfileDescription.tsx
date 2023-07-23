import React from 'react';
import {Text} from 'react-native';

interface Props {
  description: string;
}

const ProfileDescription = ({description}: Props) => <Text>{description}</Text>;

export default ProfileDescription;
