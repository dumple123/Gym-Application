// C:\Users\72065\Desktop\Gym-Application\frontend\app\MainPages\main.tsx
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ExerciseForm from '@/components/ExerciseForm'; // Adjust the import path if necessary
import ExerciseList from '@/components/ExerciseDisplay';

const MainScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ExerciseForm />
      <View style={styles.spacer} /> {/* Spacer to add space between components */}
      <ExerciseList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  spacer: {
    height: 16, // Adjust as needed for spacing between components
  },
});

export default MainScreen;