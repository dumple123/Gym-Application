// updateData.ts

import { PrismaClient } from '@prisma/client';
import * as readline from 'readline';

// Create a Prisma client instance to interact with the database
const prisma = new PrismaClient();

// Set up a readline interface to prompt the user for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to ask questions and wait for the user's response
async function question(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

// Main function where the update process happens
async function main() {
    try {
        // Ask the user whether they want to update an Exercise or a Workout Session
        const choice = await question("Do you want to update an Exercise or a Workout Session? (exercise/workout): ");

        // If the user wants to update an Exercise
        if (choice.toLowerCase() === "exercise") {
            // Retrieve and display all exercises from the database
            const exercises = await prisma.exercise.findMany();

            console.log("\nAvailable Exercises:");
            // List each exercise with its ID, name, sets, reps, and weight
            exercises.forEach((exercise) => {
                console.log(`ID: ${exercise.id} | Name: ${exercise.exerciseName} | Sets: ${exercise.sets} | Reps: ${exercise.reps} | Weight: ${exercise.weight}`);
            });

            // Ask the user for the ID of the exercise they want to update
            const exerciseId = parseInt(await question("\nEnter the ID of the Exercise to update: "));

            // Retrieve the exercise with the specified ID
            const exerciseToUpdate = await prisma.exercise.findUnique({
                where: { id: exerciseId },
            });

            // Check if the exercise exists
            if (!exerciseToUpdate) {
                console.log("Exercise not found.");
                rl.close();
                await prisma.$disconnect();
                return;
            }

            // Prompt the user for the new exercise details
            const newName = await question(`Enter new name (current: ${exerciseToUpdate.exerciseName}): `);
            const newDescription = await question(`Enter new description (current: ${exerciseToUpdate.description}): `);
            const newSets = parseInt(await question(`Enter new sets (current: ${exerciseToUpdate.sets}): `));
            const newReps = parseInt(await question(`Enter new reps (current: ${exerciseToUpdate.reps}): `));
            const newWeight = parseFloat(await question(`Enter new weight (current: ${exerciseToUpdate.weight}): `));

            // Update the exercise in the database
            const updatedExercise = await prisma.exercise.update({
                where: { id: exerciseId },
                data: {
                    exerciseName: newName || exerciseToUpdate.exerciseName,
                    description: newDescription || exerciseToUpdate.description,
                    sets: isNaN(newSets) ? exerciseToUpdate.sets : newSets,
                    reps: isNaN(newReps) ? exerciseToUpdate.reps : newReps,
                    weight: isNaN(newWeight) ? exerciseToUpdate.weight : newWeight,
                },
            });

            // Display the updated exercise
            console.log("Updated Exercise:", updatedExercise);

            // If the user wants to update a Workout Session
        } else if (choice.toLowerCase() === "workout") {
            // Retrieve and display all workout sessions from the database
            const workoutSessions = await prisma.workoutSession.findMany();

            console.log("\nAvailable Workout Sessions:");
            // List each workout session with its ID and name
            workoutSessions.forEach((session) => {
                console.log(`ID: ${session.id} | Name: ${session.workoutName}`);
            });

            // Ask the user for the ID of the workout session they want to update
            const workoutId = parseInt(await question("\nEnter the ID of the Workout Session to update: "));

            // Retrieve the workout session with the specified ID
            const workoutToUpdate = await prisma.workoutSession.findUnique({
                where: { id: workoutId },
            });

            // Check if the workout session exists
            if (!workoutToUpdate) {
                console.log("Workout session not found.");
                rl.close();
                await prisma.$disconnect();
                return;
            }

            // Prompt the user for the new workout session details
            const newWorkoutName = await question(`Enter new workout name (current: ${workoutToUpdate.workoutName}): `);

            // Update the workout session in the database
            const updatedWorkout = await prisma.workoutSession.update({
                where: { id: workoutId },
                data: {
                    workoutName: newWorkoutName || workoutToUpdate.workoutName,
                },
            });

            // Display the updated workout session
            console.log("Updated Workout Session:", updatedWorkout);

            // If the user enters an invalid choice
        } else {
            console.log("Invalid choice. Please enter 'exercise' or 'workout'.");
        }
    } catch (error) {
        // If any error occurs during the process, log it to the console
        console.error("Error updating data:", error);
    } finally {
        // Close the readline interface and disconnect the Prisma client
        rl.close();
        await prisma.$disconnect();
    }
}

// Execute the main function to run the update process
main();
