import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import UserRank from '../components/UserRank';

const Leaderboard = () => {
  const mockData = [
    {
      name: 'James Hook',
      totalDistance: 42.2,
      rank: 1
    },
    {
      name: 'Isaac Newton',
      totalDistance: 36.8,
      rank: 2
    },
    {
      name: 'Joe Rogan',
      totalDistance: 34.5,
      rank: 3
    },
    {
      name: 'Keith Moon',
      totalDistance: 28.4,
      rank: 4
    },
    {
      name: 'Robert Plant',
      totalDistance: 24.1,
      rank: 5
    },
    {
      name: 'Kai Fu Lee',
      totalDistance: 20.8,
      rank: 6
    },
    {
      name: 'Bruce Lee',
      totalDistance: 18.8,
      rank: 7
    },
    {
      name: 'Jimmy Page',
      totalDistance: 17.4,
      rank: 8,
    },{
      name: 'Pete Sampras',
      totalDistance: 14.8,
      rank: 9,
    },
    {
      name: 'Andre Agassi',
      totalDistance: 13.2,
      rank: 10,
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>yKnot.</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subTitle}>LeaderBoard</Text>
      </View>
      <FlatList
      data={mockData}
      keyExtractor={item => item.name}
      renderItem={(data) => <UserRank item={data.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 191, 166, 0.05)'
  },
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
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: '#00BFA6',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default Leaderboard;