import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';

const UserRank = ({ item, rank }) => {
  const UserId = useSelector((state) => state.user.value)

  return (
    <View>
      {
        UserId === item.id
        ?
        <View style={styles.container}>
          <View style={styles.currUser}>
            <Text style={styles.name}>{rank + 1}.  {item.name}</Text>
            <Text style={styles.distance}>{item.distance.toFixed(2)} km</Text>
          </View>
        </View>
        :
        <View style={styles.container}>
          <View style={styles.user}>
            <Text style={styles.name}>{rank + 1}.  {item.name}</Text>
            <Text style={styles.distance}>{item.distance.toFixed(2)} km</Text>
          </View>
        </View>

      }
    </View>
  )
}
const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 191, 166, 0.2)',
    height: 70
  },
  currUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 191, 166, 0.2)',
    borderTopColor: 'rgba(0, 191, 166, 0.2)',
    borderTopWidth: 1,
    height: 70,
    backgroundColor: 'rgba(0, 191, 166, 0.12)',
  },
  name: {
    alignSelf: 'center',
    marginLeft: 30,
    color: '#4D8AF0',
    fontSize: 16
  },
  distance: {
    alignSelf: 'center',
    marginRight: 30,
    color: '#4D8AF0',
    fontSize: 16
  }
})

export default UserRank
