import React from 'react';
import LandingPageTemplate from '../templates/LandingPageTemplate';
import {SafeAreaView, ScrollView} from 'react-native';

const LandingPage = () => (
  <SafeAreaView>
    <ScrollView>
      <LandingPageTemplate />
    </ScrollView>
  </SafeAreaView>
);

export default LandingPage;
