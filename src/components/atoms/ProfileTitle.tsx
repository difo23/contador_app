import React from 'react';
import {Text} from 'react-native';
import {appStyles} from '../../styles/AppStyles';

interface Props {
  leadingText: string;
}

const ProfileTitle = ({leadingText}: Props) => (
  <Text style={appStyles.profileTitle}>{leadingText}</Text>
);

export default ProfileTitle;
