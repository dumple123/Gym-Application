import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// POST route to create a new exercise
router.post('/exercises', async (req: Request, res: Response) => {
  const { exerciseName, description, sets, reps, weight, workoutName } = req.body;

  try {
    // If workoutName is provided, find or create a workout session
    let workoutSession = null;
    if (workoutName) {
      // First, try to find a session with the given workoutName
      workoutSession = await prisma.workoutSession.findFirst({
        where: { workoutName },
      });

      // If no session is found, create a new one
      if (!workoutSession) {
        workoutSession = await prisma.workoutSession.create({
          data: { workoutName },
        });
      }
    }

    // Create the exercise and associate it with the workout session if one exists
    const exercise = await prisma.exercise.create({
      data: {
        exerciseName,
        description,
        sets,
        reps,
        weight,
        workoutSessionId: workoutSession ? workoutSession.id : null,
      },
    });
    
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving exercise data' });
  }
});

// Add this GET route to retrieve all exercises
router.get('/exercises', async (req: Request, res: Response) => {
    try {
      const exercises = await prisma.exercise.findMany({
        include: {
          workoutSession: true, // Optionally include related workout session details
        },
      });
      res.json(exercises);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching exercises' });
    }
});

export default router;