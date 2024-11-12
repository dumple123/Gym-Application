import express from 'express';
import cors from 'cors'; // Import cors
import exerciseRoutes from './routes/exercise';

const app = express();

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:8081' // Replace with the frontend origin
}));

app.use(express.json());
app.use('/api', exerciseRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
