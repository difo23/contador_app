import React from 'react';
import {Text} from 'react-native';

interface Props {
  leadingText: string;
}

const ProfileTitle = ({leadingText}: Props) => <Text>{leadingText}</Text>;

export default ProfileTitle;
