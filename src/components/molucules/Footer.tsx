import React from 'react';
import Icon from '../atoms/Icon';
import {StyleSheet, View} from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Icon iconName="logo-facebook" iconSize={30} iconcolor="black" />
    <Icon iconName="logo-instagram" iconSize={30} iconcolor="black" />
    <Icon iconName="logo-twitter" iconSize={30} iconcolor="black" />
    <Icon iconName="logo-linkedin" iconSize={30} iconcolor="black" />
  </View>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
});

export default Footer;
