var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();
// POST route to create a new exercise
router.post('/exercises', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { exerciseName, description, sets, reps, weight, workoutName } = req.body;
    try {
        // If workoutName is provided, find or create a workout session
        let workoutSession = null;
        if (workoutName) {
            // First, try to find a session with the given workoutName
            workoutSession = yield prisma.workoutSession.findFirst({
                where: { workoutName },
            });
            // If no session is found, create a new one
            if (!workoutSession) {
                workoutSession = yield prisma.workoutSession.create({
                    data: { workoutName },
                });
            }
        }
        // Create the exercise and associate it with the workout session if one exists
        const exercise = yield prisma.exercise.create({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving exercise data' });
    }
}));
// Add this GET route to retrieve all exercises
router.get('/exercises', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exercises = yield prisma.exercise.findMany({
            include: {
                workoutSession: true, // Optionally include related workout session details
            },
        });
        res.json(exercises);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching exercises' });
    }
}));
export default router;
