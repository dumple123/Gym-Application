import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const router = express.Router();

interface RegisterRequest extends Request {
  body: {
    email: string;
    username: string;
    password: string;
  };
}

// POST route to create a new user
router.post('/register', async (req: RegisterRequest, res: Response, next: NextFunction): Promise<void> => {
  const { email, username, password } = req.body;

  try {
    // Check if email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      res.status(400).json({ error: 'Email or username already in use' });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

export default router;
