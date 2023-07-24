import React from 'react';
import {Text} from 'react-native';
import {appStyles} from '../../styles/AppStyles';

interface Props {
  description: string;
}

const ProfileDescription = ({description}: Props) => (
  <Text style={appStyles.profileDescription}>{description}</Text>
);

export default ProfileDescription;
