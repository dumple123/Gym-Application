// _layout file
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './greetingPage';
import MainScreen from '../MainPages/main';
import RegisterScreen from './registerScreen'; // Import the new registration screen

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
        component={RegisterScreen} // Point to RegisterScreen
      />
    </AuthStack.Navigator>
  );
}
