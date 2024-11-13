import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './greetingPage';
import MainScreen from '../MainPages/main';

const AuthStack = createStackNavigator();

export default function AuthLayout() {
  return (
    <AuthStack.Navigator initialRouteName="Index">
      <AuthStack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={MainScreen}
      />
      <AuthStack.Screen
        name="Register"
        component={MainScreen}
      />
    </AuthStack.Navigator>
  );
}
