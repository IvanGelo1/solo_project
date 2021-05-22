import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

import MapView from 'react-native-maps';

import { FontAwesome5 } from '@expo/vector-icons';

const DiscoverMain = ({ item }) => {
  const { mapTrace } = item;
  const trace = JSON.parse(mapTrace);

  const deltas = {
    latitudeDelta: 0.003,
    longitudeDelta: 0.009,
  };

  const region = { ...trace[trace.length - 1], ...deltas };

  return (
    <View style={styles.container} elevation={1.5}>
      <View style={styles.header}>
        <Text style={styles.userName}>By: {item.name}</Text>
        <FontAwesome5
          style={styles.icon}
          name="running"
          size={24}
          color="white"
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.text}>{item.duration}</Text>
        </View>
        <View>
          <Text style={styles.text}>{item.distance.toFixed(2)} km</Text>
        </View>
        <View>
          <Text style={styles.text}>{item.pace} min/km</Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region}
          scrollEnabled={false}
        >
          <MapView.Marker coordinate={trace[trace.length - 1]} />
          <MapView.Polyline
            coordinates={trace}
            strokeColor="#00BFA6"
            strokeWidth={6}
          />
        </MapView>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>
          {moment(item.createdAt).format('ddd, L')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    borderColor: 'rgba(77, 138, 240, 0.9)',
    marginTop: 25,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 191, 166, 0.1)',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(77, 138, 240, 0.9)',
    height: '18%',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  userName: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  icon: {
    marginTop: 7,
    marginRight: 30,
  },
  text: {
    fontSize: 16,
    color: 'rgba(77, 138, 240, 0.9)',
    fontWeight: 'bold',
  },
  map: {
    width: '85%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 40,
  },
  mapContainer: {
    marginBottom: 10,
    height: 140,
    borderRadius: 40,
  },
  dateContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
  date: {
    color: 'grey',
    fontSize: 13,
  },
});

export default DiscoverMain;
