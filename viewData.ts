import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        // Retrieve and display all exercises
        const exercises = await prisma.exercise.findMany({
            include: {
                workoutSession: true, // Include related workout session info
            },
        });

        console.log("Exercises:");
        exercises.forEach((exercise) => {
            console.log(`
                ID: ${exercise.id}
                Name: ${exercise.exerciseName}
                Description: ${exercise.description}
                Sets: ${exercise.sets}
                Reps: ${exercise.reps}
                Weight: ${exercise.weight}
                Workout Session: ${exercise.workoutSession?.workoutName || 'None'}
                Created At: ${exercise.createdAt}
                Updated At: ${exercise.updatedAt}
            `);
        });

        // Retrieve and display all workout sessions
        const workoutSessions = await prisma.workoutSession.findMany({
            include: {
                exercises: true, // Include related exercises
            },
        });

        console.log("\nWorkout Sessions:");
        workoutSessions.forEach((session) => {
            console.log(`\nID: ${session.id}\nName: ${session.workoutName}\nExercises:`);

            session.exercises.forEach((exercise) => {
                console.log(`  - ${exercise.exerciseName} (Sets: ${exercise.sets}, Reps: ${exercise.reps}, Weight: ${exercise.weight})`);
            });
        });
    } catch (error) {
        console.error("Error retrieving data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
