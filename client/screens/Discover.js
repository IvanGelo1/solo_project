import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DiscoverMain from '../components/DiscoverMain';

const Discover = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>yKnot.</Text>
      </View>
      {/* <View style={styles.subHeader}>
        <Text style={styles.subTitle}>Discover</Text>
      </View > */}
      <DiscoverMain />
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
    height: 40
  },
  title: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  subHeader: {
    backgroundColor: '#FFD037',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    color: '#00BFA6',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default Discover;