import React from 'react';
import Profile from '../organisms/Profile';
import {View} from 'react-native';
import Content from '../organisms/Content';

const LandingPageTemplate = () => (
  <View>
    <Profile />
    <Content />
  </View>
);

export default LandingPageTemplate;
