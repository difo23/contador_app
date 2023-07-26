import React from 'react';
import {Text, View} from 'react-native';
import {appStyles} from '../../styles/AppStyles';

interface Props {
  title: string;
  date: string;
  category: string;
  description: string;
}

const Card = ({title, date, category, description}: Props) => (
  <View style={appStyles.card}>
    <View style={appStyles.cardContent}>
      <Text style={appStyles.title}>{title}</Text>
      <View style={appStyles.rowContainer}>
        <Text>{date}</Text>
        <Text>|</Text>
        <Text>{category}</Text>
      </View>
      <Text>{description}</Text>
    </View>
  </View>
);

export default Card;
