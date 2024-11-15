import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterForm from '../../components/RegisterForm'; // Adjust this import path if necessary

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <RegisterForm />
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
