import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../../app/MainPages/main'; 


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={MainScreen} />
      <Tab.Screen name="History" component={MainScreen} />
      <Tab.Screen name="Workout" component={MainScreen} />
      <Tab.Screen name="Exercises" component={MainScreen} />
      <Tab.Screen name="Measure" component={MainScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
