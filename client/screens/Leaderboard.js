import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Leaderboard = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>yKnot.</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subTitle}>LeaderBoard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFA6',
    height: 40,
  },
  title: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subHeader: {
    backgroundColor: '#FFD037',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    color: '#00BFA6',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default Leaderboard;