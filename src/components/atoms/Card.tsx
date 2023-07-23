import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  date: string;
  category: string;
  description: string;
}

const Card = ({title, date, category, description}: Props) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rowContainer}>
        <Text>{date}</Text>
        <Text>|</Text>
        <Text>{category}</Text>
      </View>
      <Text>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Card;
