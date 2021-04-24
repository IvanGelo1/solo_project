import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UserRank = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.name}>{item.rank}.  {item.name}</Text>
        <Text style={styles.distance}>{item.totalDistance} km</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 191, 166, 0.2)',
    height: 70
  },
  name: {
    alignSelf: 'center',
    marginLeft: 30,
    color: '#4D8AF0',
    fontSize: 16,
  },
  distance: {
    alignSelf: 'center',
    marginRight: 30,
    color: '#4D8AF0',
    fontSize: 16,
  }
});

export default UserRank;