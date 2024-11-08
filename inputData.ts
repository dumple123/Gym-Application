import { PrismaClient } from '@prisma/client';
import * as readline from 'readline';

const prisma = new PrismaClient();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function question(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
    try {
        // Prompt user for Exercise data
        const exerciseName = await question("Enter Exercise Name: ");
        const description = await question("Enter Exercise Description: ");
        const sets = parseInt(await question("Enter number of Sets: "), 10);
        const reps = parseInt(await question("Enter number of Reps: "), 10);
        const weight = parseFloat(await question("Enter Weight: "));

        // Save exercise data to the database
        const exercise = await prisma.exercise.create({
            data: {
                exerciseName,
                description,
                sets,
                reps,
                weight,
            },
        });

        console.log("Exercise data saved:", exercise);

        // Prompt for Workout Session data (optional)
        const addWorkout = (await question("Do you want to add a Workout Session? (yes/no): ")).toLowerCase();

        if (addWorkout === 'yes') {
            const workoutName = await question("Enter Workout Session Name: ");

            const workoutSession = await prisma.workoutSession.create({
                data: {
                    workoutName,
                    exercises: {
                        connect: { id: exercise.id },
                    },
                },
            });

            console.log("Workout session saved:", workoutSession);
        }
    } catch (error) {
        console.error("Error saving data:", error);
    } finally {
        rl.close();
        await prisma.$disconnect();
    }
}

main();
