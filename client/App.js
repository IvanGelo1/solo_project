import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Navigation from './screens/Navigation';
import MyRuns from './screens/MyRuns';
import RunDetails from './screens/RunDetails';

import RunPreview from './components/RunPreview';

const Stack = createStackNavigator();

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrotMsg] = useState(null);
  // const [date, setDate] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

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
          name="Welcome"
          component={Welcome}
          options={{
            title: 'yKnot.',
            headerStyle: {
              backgroundColor: '#00BFA6',
              height: 80,
            },
            headerTitleStyle: {
              color: 'white',
            }
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#00BFA6',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'Sign In',
            headerStyle: {
              backgroundColor: '#00BFA6',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Navigation"
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#00BFA6',
              elevation: 0,
              height: 50
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: '#00BFA6',
          }}
        >
          {() => <Navigation location={location} />}
        </Stack.Screen>
        <Stack.Screen name="MyRuns" component={MyRuns} />
        <Stack.Screen name="RunPreview" component={RunPreview} />
        <Stack.Screen
          name="RunDetails"
          component={RunDetails}
          options={{
            title: 'Sat, 04/24/2021',
            headerStyle: {
              backgroundColor: '#00BFA6',
              // height: 50
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
