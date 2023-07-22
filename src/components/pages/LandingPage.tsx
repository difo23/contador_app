import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../atoms/Icon';

const LandingPage = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Icon
        iconName="menu-outline"
        iconSize={30}
        backgrondColor="transparent"
        iconcolor="black"
      />
    </View>
  );
};

export default LandingPage;
