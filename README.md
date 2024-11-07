Gym-Application
Side project for learning purposes & Gym

1. Clone the Project Repository
If you’re using Git, clone your project repository to the new computer:

git clone <your-repository-url>
cd <your-project-directory>
2. Install Node.js
Install Node.js on the new computer by downloading it from Node.js if it’s not already installed.

Verify the installation by running:

node -v
npm -v
3. Install Project Dependencies
With the project directory open in the terminal, install all the dependencies listed in package.json by running:

npm install
4. Set Up Prisma
Make sure Prisma is installed globally (optional, but helpful for running Prisma CLI commands) and locally within the project:

npm install -g prisma
To initialize Prisma, run:

npx prisma generate
5. Create or Migrate the Database
To set up the SQLite database schema on the new computer, use Prisma Migrate:

npx prisma migrate dev --name init
This will create the dev.db file if it doesn’t already exist and apply any migrations to set up your database structure.

6. Verify Installation
Run the project to make sure everything is working. You can start the application with:

npm start
Alternatively, if you have a specific script defined in package.json (e.g., "dev": "nodemon server.js"), you can use:

npm run dev
Viewing the Prisma Database
To view the Prisma database in your browser, run:

npx prisma studio