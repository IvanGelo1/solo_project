import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import formatting from '../helpers/formatting';

const Monitor = ({ distance, avgPace, duration }) => {

  const time = formatting.timeFormat(duration);
  const pace = formatting.avgPaceFormat(avgPace);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>yKnot.</Text>
      <Text style={styles.durationName}>Duration</Text>
      <Text style={styles.duration}>{time}</Text>
      <View style={styles.monitor}>
        <View style={styles.distanceView}>
          <Text style={styles.distanceName}>Distance (km)</Text>
          <Text style={styles.distance}>{distance.toFixed(2)}</Text>
        </View>
        <View style={styles.avgPaceView}>
          <Text style={styles.avgPaceName}>AvgPace (min/km)</Text>
          <Text style={styles.avgPace}>{pace}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#00BFA6',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  durationName: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 15,
  },
  duration: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  distanceName: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
  },
  monitor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  distanceView: {
    margin: 20,
    marginLeft: 55,
    marginTop: 5
  },
  distance: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  avgPaceView: {
    margin: 20,
    marginRight: 55,
    marginTop: 5,
  },
  avgPace: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  avgPaceName: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
  }
})


export default Monitor;