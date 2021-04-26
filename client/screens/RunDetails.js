import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import moment from 'moment'
import formatting from '../helpers/formatting'
import { Feather, MaterialIcons } from '@expo/vector-icons'

import apiService from '../apiService/apiClientService';

const RunDetails = ({ route }) => {
  const [mapTrace, setMapTrace] = useState([{ latitude: 41, longitude: 2 }]);
  const [shared, setShared] = useState(false);

  const { item } = route.params
  const { distance, duration, avgPace, timeStarted, id } = item

  useEffect(() => {
    const fetchTrace = async () => {
      const traces = await apiService.getTrace(id);
      if (traces.length) {
        setMapTrace(traces);
      }
    }
    fetchTrace();
  }, [])

  const time = formatting.timeFormat(duration)
  const pace = formatting.avgPaceFormat(avgPace)

  return (
    <View style={styles.container}>
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
        <MapView.Marker
          coordinate={mapTrace[mapTrace.length - 1]}
        />
        <MapView.Polyline
          coordinates={mapTrace}
          strokeColor='#00BFA6'
          strokeWidth={6}
        />
      </MapView>
      {
        !shared
        ?
        <TouchableOpacity style={styles.share} >
          <Text style={styles.buttonFont}>SHARE</Text>
        </TouchableOpacity>
        :
        <View></View>
      }
      <View style={styles.mainInfo}>
        <View style={styles.middle}>
          <Text style={styles.mainValue}>{distance.toFixed(2)} km</Text>
          <Text style={styles.helper}>Distance</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.mainValue}>{time}</Text>
          <Text style={styles.helper}>Duration</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.iconProp}>
            <MaterialIcons name='speed' style={styles.icon} />
            <Text style={styles.name}>Avg. Pace</Text>
          </View>
          <Text style={styles.property}>{pace} min/km</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.iconProp}>
            <Feather name='trending-up' style={styles.icon} />
            <Text style={styles.name}>El. Gain</Text>
          </View>
          <Text style={styles.property}>76 m</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.iconProp}>
            <Feather name='trending-down' style={styles.icon} />
            <Text style={styles.name}>El. Loss</Text>
          </View>
          <Text style={styles.property}>74 m</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.iconProp}>
            <Feather name='play' style={styles.icon} />
            <Text style={styles.name}>Start</Text>
          </View>
          <Text style={styles.property}>{moment(timeStarted).format('LT')}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 191, 166, 0.10)'

  },
  map: {
    width: Dimensions.get('window').width,
    height: '40%'
  },
  mainInfo: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(77, 138, 240, 0.8)'
  },
  mainValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  content: {
    height: '45%',
    justifyContent: 'space-evenly'
  },
  helper: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  middle: {
    alignSelf: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 14,
    marginHorizontal: 30,
    borderBottomColor: 'rgba(77, 138, 240, 0.2)',
    borderBottomWidth: 2
  },
  name: {
    fontSize: 18,
    color: '#4D8AF0',
    marginBottom: 6
  },
  property: {
    fontSize: 18,
    color: '#4D8AF0'
  },
  date: {
    alignItems: 'center',
    margin: 5,
    fontSize: 20,
    marginBottom: 2
  },
  iconProp: {
    flexDirection: 'row'
  },
  icon: {
    fontSize: 18,
    color: 'rgba(77, 138, 240, 1)',
    marginRight: 12
  },
  share: {
    position: 'absolute',
    borderRadius: 20,
    backgroundColor: 'rgba(77, 138, 240, 1)',
    top: '0%',
    alignSelf: 'flex-end'
  },
  buttonFont: {

  }
})

export default RunDetails
