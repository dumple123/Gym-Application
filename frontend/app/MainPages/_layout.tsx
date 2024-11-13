import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './main';

const Stack = createStackNavigator();
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

function MainLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainLayout;
