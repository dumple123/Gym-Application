import React, { useEffect, useState } from 'react';

interface Exercise {
  id: number;
  exerciseName: string;
  description: string;
  sets: number;
  reps: number;
  weight: number;
  createdAt: string;
  updatedAt: string;
  workoutSession?: {
    workoutName: string;
  };
}

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/exercises'); // Adjust this URL if needed
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) return <p>Loading exercises...</p>;

  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <h3>{exercise.exerciseName}</h3>
            <p>{exercise.description}</p>
            <p>Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight} kg</p>
            {exercise.workoutSession && (
              <p>Workout Session: {exercise.workoutSession.workoutName}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
