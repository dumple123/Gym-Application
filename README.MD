# Gym Progress Tracking Application

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **SQLite** (for backend, though Prisma will manage the database)
- **Expo CLI** (for frontend development)

## Setup Instructions

### 1. **Clone the Repository**

Clone the repository to your local machine and navigate to the project directory:

- `git clone <your-repository-url>`
- `cd Gym-Application`

### 2. **Set Up the Backend**

1. **Navigate to the backend directory:**

   In your terminal, go to the `backend` folder:

   - `cd backend`

2. **Install Dependencies:**

   Use npm or yarn to install the backend dependencies:

   - Using npm:
     - `npm install`
   - Using yarn:
     - `yarn install`

3. **Set Up the Database:**

   Prisma will generate the database based on the schema. Run the following command to set up the SQLite database:

   - `npx prisma migrate dev --name init`

4. **Run the Backend Server:**

   Start the backend server:

   - `npx ts-node index.ts`

   The server will run at `http://localhost:3000`.

---

### 3. **Set Up the Frontend**

1. **Navigate to the frontend directory:**

   In your terminal, go to the `frontend` folder:

   - `cd frontend`

2. **Install Dependencies:**

   Use npm or yarn to install the frontend dependencies:

   - Using npm:
     - `npm install`
   - Using yarn:
     - `yarn install`

3. **Start the Expo Development Server:**

   Start the Expo project with the following command:

   - `npx expo start`

   This will open the Expo developer tools in your browser. You can scan the QR code to run the app on your mobile device, or you can use the web browser for testing.

---

### 4. **Environment Configuration (Optional)**

If your project requires environment variables (e.g., API keys), create a `.env` file in both the `backend` and `frontend` directories. Make sure to add any sensitive data you may need, such as:

- In the backend, add database configurations in `.env`.
- In the frontend, add any API keys or URLs you may need to access.

Example for `.env` in the **backend**:

- `DATABASE_URL="file:./dev.db"`

Example for `.env` in the **frontend**:

- `API_URL="http://localhost:3000"`

---

### 5. **Test the Application**

Once both servers are running, you should be able to:

- Access the backend API at `http://localhost:3000`
- Use the Expo app (either on mobile or web) to interact with the frontend

---

### 6. **Running Tests (If Applicable)**

If you have any tests set up for the backend or frontend, you can run them with the following commands:

For backend tests (assuming you're using Jest or another testing framework):

- `npm test`

For frontend tests (if you’re using Jest or React Native Testing Library):

- `npm test`

---

### 7. **Stopping the Server**

To stop both the frontend and backend servers:

- Press `Ctrl+C` in the terminal where the backend or frontend server is running.

---

## Troubleshooting

- If you encounter issues with the SQLite database, ensure that the `.env` file is properly set up and the `prisma migrate` command ran successfully.
- If you see issues with the Expo app, try clearing the cache with `npx expo start -c`.
