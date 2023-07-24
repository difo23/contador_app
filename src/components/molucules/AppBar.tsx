import React from 'react';
import {View} from 'react-native';
import Icon from '../atoms/Icon';
import {appStyles} from '../../styles/AppStyles';

const AppBar = () => {
  return (
    <View style={appStyles.appBar}>
      <Icon iconName="menu-outline" iconSize={30} iconcolor="black" />
    </View>
  );
};

export default AppBar;
