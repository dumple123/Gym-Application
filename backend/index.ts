import express, { Request, Response } from 'express';  // Import express and types
import { PrismaClient } from '@prisma/client';         // Import the PrismaClient

const app = express();
const prisma = new PrismaClient();                    // Initialize Prisma Client

app.use(express.json());

app.get('/exercises', async (req: Request, res: Response) => {  // Add types for req and res
  const exercises = await prisma.exercise.findMany();  // Use prisma client to fetch data
  res.json(exercises);  // Send the fetched exercises as a JSON response
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
