// C:\Users\72065\Desktop\Gym-Application\frontend\app\Auth\index.tsx

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp

// Define the parameter list for your Stack Navigator
type RootStackParamList = {
  Home: undefined;
  Main: undefined; // Main route will navigate to MainPages
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>; // Type navigation

export default function Index() {
  const navigation = useNavigation<IndexScreenNavigationProp>(); // Use the typed navigation

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => navigation.replace('Main')} // Now replace is recognized and works
      />
      <Button
        title="Register"
        onPress={() => navigation.replace('Main')} // Now replace is recognized and works
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