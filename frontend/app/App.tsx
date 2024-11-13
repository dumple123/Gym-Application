import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLayout from '@/app/Auth/_layout';
import MainPagesLayout from 'C:\Users\72065\Desktop\Gym-Application\frontend\app\MainPages\_layout';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={AuthLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainPagesLayout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default App;
