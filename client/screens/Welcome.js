import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import RunningSvg from '../src/RunningSvg';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>yKnot.</Text>
      <View>
        <Text style={styles.p}>Life is short...</Text>
        <Text style={styles.p}>Running makes it seem longer</Text>
      </View>
      <View  style={styles.svg}>
        <RunningSvg />
      </View>
      <View style={styles.startContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SignUp') }}>
          <Text style={styles.text}>Get started</Text>
        </TouchableOpacity>
        <View style={styles.signCont}>
          <Text style={styles.user}>Already have an account? </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}>
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F3',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 60
  },
  p: {
    textAlign: 'center',
    fontSize: 18
  },
  startContainer: {
    marginBottom: 30
  },
  svg: {
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00BFA6',
    borderRadius: 3,
    padding: 12,
    margin: 30,
    marginBottom: 10
  },
  signCont: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  user: {
    textAlign: 'center'
  },
  signIn: {
    color: '#00BFA6',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Welcome
