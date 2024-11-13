import express from 'express';
import cors from 'cors'; // Import CORS
import { PrismaClient } from '@prisma/client';
import exerciseRoutes from './routes/exercise';
const app = express();
const prisma = new PrismaClient();
// Configure CORS to allow requests from your frontend
app.use(cors({
    origin: 'http://localhost:8081' // Replace with the frontend origin
}));
app.use(express.json());
// Integrate the exercise routes
app.use('/api', exerciseRoutes); // All routes in exercise.ts will now be prefixed with /api
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
