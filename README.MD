Gym Progress Tracking Application
=================================

This application allows users to track their gym progress using a React Native frontend (Expo) and a Node.js backend with SQLite for storage.

Prerequisites
-------------

Ensure you have the following installed:

-   **Node.js** (version 16 or higher)
-   **npm** or **yarn**
-   **SQLite** (for backend, Prisma will manage the database)
-   **Expo CLI** (for frontend development)

Setup Instructions
------------------

### 1\. **Clone the Repository**

Clone the repository and navigate to the project directory:

`git clone <your-repository-url>`

`cd Gym-Application`

### 2\. **Install Dependencies**

In the root directory, install all dependencies for both the backend and frontend:

Using npm:

`npm install`

Using yarn:

`yarn install`

### 3\. **Configure Environment Variables**

Create a `.env` file in the root directory to store sensitive environment variables. Below are example entries for both backend and frontend:

-   **Backend configuration**:

    `DATABASE_URL="file:./backend/prisma/dev.db"`

-   **Frontend configuration**:

    `API_URL="http://localhost:3000"`

### 4\. **Set Up the Database**

Prisma will handle the database setup based on the schema. Run the following command to initialize the SQLite database:

`npx prisma migrate dev --name init`

### 5\. **Running the Application**

To start both the backend and frontend servers:

#### Backend:

1.  Start the backend server by running:

    `npm run backend`

    The backend server will run on `http://localhost:3000`.

#### Frontend:

1.  Start the Expo development server:

    `npm run frontend`

    This opens Expo's developer tools. You can scan the QR code to run the app on your mobile device or use a web browser for testing.

### 6\. **Testing the Application**

#### Backend Tests:

Run backend tests (if available):

`npm run test-backend`

#### Frontend Tests:

Run frontend tests (if available):

`npm run test-frontend`

### 7\. **Stopping the Servers**

To stop the backend and frontend servers, press `Ctrl+C` in the respective terminal sessions.

Troubleshooting
---------------

-   **Database Issues**: Ensure the `.env` file is properly configured, and that the `prisma migrate` command has run successfully.

-   **Expo Issues**: Clear Expo's cache with:

    `npx expo start -c`