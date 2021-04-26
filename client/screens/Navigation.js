import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import MainRun from './MainRun'
import MyRuns from './MyRuns'
import Leaderboard from './Leaderboard'
import Discover from './Discover';

const Tab = createBottomTabNavigator()

const Navigation = ({ location }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name === 'MainRun') {
            iconName = 'running'
          } else if (route.name === 'MyRuns') {
            iconName = 'database';
          } else if (route.name === 'Leaderboard') {
            iconName = 'medal';
          } else if (route.name === 'Discover') {
            iconName = 'map-signs';
          }
          return <FontAwesome5 name={iconName} size={22} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: '#4D8AF0',
        inactiveTintColor: 'white',
        showLabel: false,
        style: {
          backgroundColor: '#00BFA6',
          height: 42
        }
      }}
    >
      <Tab.Screen name='MainRun' title=''>
        {() => <MainRun location={location} />}
      </Tab.Screen>
      <Tab.Screen name='MyRuns' component={MyRuns} />
      <Tab.Screen name='Leaderboard' component={Leaderboard} />
      <Tab.Screen name='Discover' component={Discover} />
    </Tab.Navigator>
  )
}

export default Navigation
