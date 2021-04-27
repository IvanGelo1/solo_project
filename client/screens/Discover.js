import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import DiscoverMain from '../components/DiscoverMain';
import apiService from '../apiService/apiClientService';

const Discover = () => {
  const [publicRuns, setPublicRuns] = useState([]);

  useEffect(() => {
    const fetchPublic = async () => {
      const created = await apiService.getPublicRuns();
      setPublicRuns(created);
    }
    fetchPublic();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
      </View>
      {/* <View style={styles.subHeader}>
        <Text style={styles.subTitle}>Discover</Text>
      </View > */}
      {
        publicRuns.length
        ?
        <View style={styles.runContainer}>
          <FlatList
            data={publicRuns}
            keyExtractor={item => item.id.toString()}
            renderItem={(data) => <DiscoverMain item={data.item} />}
          />
        </View>
        :
        <View />
      }
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
    backgroundColor: 'red',
    height: 40
  },
  title: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    // alignItems: 'flex-start'
  },
  subHeader: {
    backgroundColor: 'rgba(255, 208, 55, 0.8)',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    color: '#00BFA6',
    fontWeight: 'bold',
    fontSize: 20
  },
  runContainer: {
    flex: 1
  }
})

export default Discover;