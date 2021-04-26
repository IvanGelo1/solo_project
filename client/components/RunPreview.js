import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import moment from 'moment'
import formatting from '../helpers/formatting'
import { FontAwesome5 } from '@expo/vector-icons'

import { useDispatch } from 'react-redux'
import { dateChange } from '../features/dateChangeSlice'

const RunPreview = ({ navigation, item }) => {
  const { distance, duration } = item
  const formatted = formatting.timeFormat(duration)

  const dispatch = useDispatch()

  const formattedDate = moment(item.createdAt).format('ddd, L')

  const dateUpdate = () => {
    dispatch(dateChange(formattedDate))
    navigation.navigate('RunDetails', { item })
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => dateUpdate()}>
      <Text style={styles.date}>{moment(item.createdAt).format('ddd, L')}</Text>
      <View style={styles.main}>
        <Text style={styles.distance}>{distance.toFixed(2)} km</Text>
        <Text style={styles.duration}>{formatted}</Text>
      </View>
      <FontAwesome5 name='running' style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginTop: 10,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 191, 166, 0.2)',
    paddingVertical: 15
  },
  date: {
    color: '#696969',
    fontSize: 12,
    marginLeft: 10
  },
  distance: {
    color: '#4D8AF0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  duration: {
    color: '#4D8AF0',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  icon: {
    fontSize: 30,
    color: 'rgba(77, 138, 240, 0.7)',
    marginRight: 10
  },
  main: {
    alignSelf: 'center',
    marginRight: 50
  }

})

export default RunPreview
