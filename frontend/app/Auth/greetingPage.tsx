// C:\Users\72065\Desktop\Gym-Application\frontend\app\Auth\index.tsx

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Register: undefined; // Add Register as a route
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Index() {
  const navigation = useNavigation<IndexScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => navigation.replace('Main')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')} // Navigate to Register screen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
