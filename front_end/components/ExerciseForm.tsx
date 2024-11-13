import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ExerciseForm = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [description, setDescription] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [workoutName, setWorkoutName] = useState('');
    const [addWorkout, setAddWorkout] = useState(false);
    const [message, setMessage] = useState('');

    // Function to handle API request
    const createExercise = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/exercises', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error saving data:', error);
            throw error;
        }
    };

    const handleSubmit = async () => {
        try {
            const data = {
                exerciseName,
                description,
                sets: parseInt(sets, 10),
                reps: parseInt(reps, 10),
                weight: parseFloat(weight),
                workoutName: addWorkout ? workoutName : null,
            };
            const response = await createExercise(data);
            setMessage('Data saved successfully!');
            console.log('Data saved:', response);
        } catch (error) {
            setMessage('Error saving data.');
            console.error('Error saving data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Exercise Name"
                value={exerciseName}
                onChangeText={setExerciseName}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Sets"
                value={sets}
                onChangeText={setSets}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Reps"
                value={reps}
                onChangeText={setReps}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Weight"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
            />
            <View style={styles.checkboxContainer}>
                <Text>Add Workout Session?</Text>
                <Button title={addWorkout ? "Yes" : "No"} onPress={() => setAddWorkout(!addWorkout)} />
            </View>
            {addWorkout && (
                <TextInput
                    style={styles.input}
                    placeholder="Workout Session Name"
                    value={workoutName}
                    onChangeText={setWorkoutName}
                />
            )}
            <Button title="Submit" onPress={handleSubmit} />
            {message ? <Text>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
});

export default ExerciseForm;
