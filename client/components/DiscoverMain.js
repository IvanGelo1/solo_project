import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

import MapView from 'react-native-maps'

import { FontAwesome5 } from '@expo/vector-icons'

const DiscoverMain = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="running" size={24} color="white" />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.text}>00:38:14</Text>
        </View>
        <View>
          <Text style={styles.text}>7.23 km</Text>
        </View>
        <View>
          <Text style={styles.text}>5:32 min/km</Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={
            {
              latitude: 41.3950212,
              longitude: 2.1976979,
              latitudeDelta: 0.005,
              longitudeDelta: 0.03
            }
          }
        >
          {/* <MapView.Marker
            coordinate={mapTrace[mapTrace.length - 1]}
          />
          <MapView.Polyline
            coordinates={mapTrace}
            strokeColor='#00BFA6'
            strokeWidth={6}
          /> */}
        </MapView>
      </View>
      <View>
        <Text style={styles.comment}>"Nice flat 7k, perfect for early sunday run"</Text>
      </View>
      <View>
        <Text style={styles.userName}>Ivan Gelo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
    // backgroundColor: 'pink',
    backgroundColor: 'rgba(0, 191, 166, 0.1)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 191, 166, 0.2)',


    height: 400,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(77, 138, 240, 0.9)',
    height: 40,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  userName: {
    fontSize: 15,
    color: 'rgba(77, 138, 240, 0.9)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    color: 'rgba(77, 138, 240, 0.9)',
    // color: 'white',
    fontWeight: 'bold',
  },
  map: {
    width: Dimensions.get('window').width,
    // width: '90%',

    height: '100%',
    // marginTop: 10,
    alignSelf: 'center',
  },
  mapContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 191, 166, 0.2)',
    height: 250,
  },
  comment: {
    fontSize: 14,
    color: '#4D8AF0',
    textAlign: 'center',
    marginTop: 10
  }
})

export default DiscoverMain;