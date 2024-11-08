// deleteData.ts

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

// Main function where the deletion process happens
async function main() {
    try {
        // Ask the user whether they want to delete an Exercise or a Workout Session
        const choice = await question("Do you want to delete an Exercise or a Workout Session? (exercise/workout): ");

        // If the user wants to delete an Exercise
        if (choice.toLowerCase() === "exercise") {
            // Retrieve and display all exercises from the database
            const exercises = await prisma.exercise.findMany();

            console.log("\nAvailable Exercises:");
            // List each exercise with its ID, name, sets, reps, and weight
            exercises.forEach((exercise) => {
                console.log(`ID: ${exercise.id} | Name: ${exercise.exerciseName} | Sets: ${exercise.sets} | Reps: ${exercise.reps} | Weight: ${exercise.weight}`);
            });

            // Ask the user for the ID of the exercise they want to delete
            const exerciseId = parseInt(await question("\nEnter the ID of the Exercise to delete: "));

            // Delete the exercise with the given ID
            const deletedExercise = await prisma.exercise.delete({
                where: { id: exerciseId },
            });

            // Display the deleted exercise
            console.log("Deleted Exercise:", deletedExercise);

            // If the user wants to delete a Workout Session
        } else if (choice.toLowerCase() === "workout") {
            // Retrieve and display all workout sessions from the database, including related exercises
            const workoutSessions = await prisma.workoutSession.findMany({
                include: {
                    exercises: true,  // Include exercises associated with each workout session
                },
            });

            console.log("\nAvailable Workout Sessions:");
            // List each workout session with its ID, name, and the number of exercises in it
            workoutSessions.forEach((session) => {
                console.log(`ID: ${session.id} | Name: ${session.workoutName} | Exercises: ${session.exercises.length}`);
            });

            // Ask the user for the ID of the workout session they want to delete
            const workoutId = parseInt(await question("\nEnter the ID of the Workout Session to delete: "));

            // Delete the workout session with the given ID
            const deletedWorkout = await prisma.workoutSession.delete({
                where: { id: workoutId },
            });

            // Display the deleted workout session
            console.log("Deleted Workout Session:", deletedWorkout);

            // If the user enters an invalid choice
        } else {
            console.log("Invalid choice. Please enter 'exercise' or 'workout'.");
        }
    } catch (error) {
        // If any error occurs during the process, log it to the console
        console.error("Error deleting data:", error);
    } finally {
        // Close the readline interface and disconnect the Prisma client
        rl.close();
        await prisma.$disconnect();
    }
}

// Execute the main function to run the deletion process
main();
