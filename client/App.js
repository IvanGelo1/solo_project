import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert } from 'react-native'
import * as Location from 'expo-location'

import { Entypo } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './screens/Welcome'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Navigation from './screens/Navigation'
import MyRuns from './screens/MyRuns'
import RunDetails from './screens/RunDetails'

import RunPreview from './components/RunPreview'

import { useSelector } from 'react-redux'

import apiService from './apiService/apiClientService';

const Stack = createStackNavigator()

const App = () => {
  // const [location, setLocation] = useState(null)
  const [location, setLocation] = useState({coords: {latitude: 41, longitude: 2}})

  const [errorMsg, setErrotMsg] = useState(null)

  const runDate = useSelector(state => state.date.value)

  useEffect(() => {
    (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          return
        }
        else if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
          setLocation(location)
        }
    })()
  }, []);

  const userName = useSelector(state => state.userName.value);
  const dur = useSelector(state => state.dur.value);
  const distance = useSelector(state => state.distance.value);
  const pace = useSelector(state => state.pace.value);
  const mapTrace = useSelector(state => state.mapTrace.value);
  const mapTraceStr = JSON.stringify(mapTrace);


  const shareRun = async () => {
    Alert.alert('Share your Run!', 'Another run bites the dust...');
    const publicRun = {
      name: userName,
      duration: dur,
      distance,
      pace,
      mapTrace: mapTraceStr,
    };
    await apiService.createPublicRun(publicRun);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerStyle: {
            height: 70,
            backgroundColor: 'black'
          }
        }}
      >
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{
            title: 'yKnot.',
            headerStyle: {
              backgroundColor: '#00BFA6',
              height: 80
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#00BFA6'
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: '#ffffff'
          }}
        />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{
            title: 'Sign In',
            headerStyle: {
              backgroundColor: '#00BFA6'
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name='Navigation'
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#00BFA6',
              elevation: 0,
              height: 50
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: '#00BFA6'
          }}
        >
          {() => <Navigation location={location} />}
        </Stack.Screen>
        <Stack.Screen name='MyRuns' component={MyRuns} />
        <Stack.Screen name='RunPreview' component={RunPreview} />
        <Stack.Screen
          name='RunDetails'
          component={RunDetails}
          options={{
            title: runDate,
            headerRight: () => (
              <Entypo style={styles.share} name="share" size={30} color="white" onPress={() => shareRun()} />
            ),
            headerStyle: {
              backgroundColor: '#00BFA6'
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  share: {
    marginRight: 20,
  }
})

export default App
