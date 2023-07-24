import React from 'react';
import Icon from '../atoms/Icon';
import {View} from 'react-native';
import {appStyles} from '../../styles/AppStyles';

const Footer = () => (
  <View style={appStyles.footer}>
    <Icon iconName="logo-facebook" iconSize={30} iconcolor="black" />
    <Icon iconName="logo-instagram" iconSize={30} iconcolor="black" />
    <Icon iconName="logo-twitter" iconSize={30} iconcolor="black" />
    <Icon iconName="logo-linkedin" iconSize={30} iconcolor="black" />
  </View>
);
export default Footer;
