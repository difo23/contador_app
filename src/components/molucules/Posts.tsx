import React from 'react';
import Card from '../atoms/Card';
import {View} from 'react-native';
import {appStyles} from '../../styles/AppStyles';

const Posts = () => (
  <View style={appStyles.post}>
    <Card
      title="Making a design system from scratch"
      date={'12 Feb 2020'}
      category={'Design, Pattern'}
      description={
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
      }
    />
    <Card
      title="Making a design system from scratch"
      date={'12 Feb 2020'}
      category={'Design, Pattern'}
      description={
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
      }
    />
  </View>
);

export default Posts;
