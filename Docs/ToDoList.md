# Gym App Development To-Do List

## Setup

- [ ] Set up version control with Git
- [ ] Initialize Node.js project
- [ ] Set up TypeScript in Node.js
- [ ] Install required packages:
  - [ ] `koa` - Core Koa framework
  - [ ] `koa-router` - Middleware for handling routes
  - [ ] `koa-bodyparser` - Middleware for parsing request bodies
  - [ ] `pg` - PostgreSQL client for Node.js
  - [ ] `prisma` - ORM for database interactions
  - [ ] `@prisma/client` - Auto-generated query builder for Prisma
  - [ ] `dotenv` - For managing environment variables
  - [ ] `@koa/cors` - Middleware for enabling CORS
  - [ ] `jsonwebtoken` - For handling JWT-based authentication
  - [ ] `bcryptjs` - For password hashing

## Backend Development (Node.js with Koa)

### 1. User Management
- [ ] Create user model and migration with Prisma
- [ ] Implement user registration (with password hashing using bcrypt)
- [ ] Implement user login with JWT authentication
- [ ] Implement password reset functionality (email integration)
- [ ] Implement Google sign-in
- [ ] Implement 2FA for security

### 2. Exercise Management
- [ ] Create exercise model and migration with Prisma
- [ ] Implement API to add default exercises (admin-only)
- [ ] Implement API to add custom exercises (user-specific)
- [ ] Create endpoints to retrieve exercises (for both admin and user-specific)

### 3. Workout Logging
- [ ] Create workout model and migration with Prisma
- [ ] Implement API to log workouts (date, exercises, sets, reps, weights)
- [ ] Implement API to edit and delete workout entries
- [ ] Implement logic to track total work per set (weight * reps * sets)
- [ ] Implement logic to calculate and store the average work for an exercise

### 4. Progress Tracking
- [ ] Create API to fetch user workout history (with filtering by exercise, date, etc.)
- [ ] Implement logic to calculate and display progress over time (graphs, stats)

### 5. Personal Records (PR) Tracking
- [ ] Create personal records model and migration with Prisma
- [ ] Implement API to automatically detect and store new PRs (heaviest weight lifted per exercise)
- [ ] Implement API to retrieve all-time PRs (for each exercise)

### 6. Workout Presets
- [ ] Create workout preset model and migration with Prisma
- [ ] Implement API to create, edit, and delete workout presets
- [ ] Implement API to retrieve workout presets (user-specific)

## Frontend Development (React)

### 1. Setup
- [ ] Set up React project
- [ ] Install required packages:
  - [ ] `axios` - For making HTTP requests to the API
  - [ ] `react-router-dom` - For handling client-side routing
  - [ ] `react-chartjs-2` - For displaying progress graphs
  - [ ] `redux` (optional) - For managing application state
- [ ] Set up TypeScript in React

### 2. User Management
- [ ] Create registration form component
- [ ] Create login form component
- [ ] Implement password reset UI
- [ ] Implement Google sign-in UI
- [ ] Implement 2FA UI

### 3. Exercise Management
- [ ] Create exercise listing component
- [ ] Create component to add custom exercises
- [ ] Implement exercise filtering and categorization
- [ ] Display default and user-created exercises

### 4. Workout Logging
- [ ] Create workout log form component
- [ ] Implement logic to input exercises, sets, reps, and weights
- [ ] Create component to display logged workouts
- [ ] Implement edit and delete functionality for workouts

### 5. Progress Tracking
- [ ] Create progress tracking component
- [ ] Implement graphs for visualizing progress over time
- [ ] Create summary statistics component (e.g., total work lifted)

### 6. Personal Records (PR) Tracking
- [ ] Create PR tracking component
- [ ] Display list of all-time PRs
- [ ] Implement notification or badge for new PRs

### 7. Workout Presets
- [ ] Create workout presets management component
- [ ] Implement logic to select and follow a workout preset

## Testing
- [ ] Write unit tests for backend APIs
- [ ] Write integration tests for frontend components
- [ ] Perform manual testing for user flows

## Deployment
- [ ] Choose hosting for the Node.js backend (e.g., Heroku, AWS)
- [ ] Choose hosting for the PostgreSQL database (e.g., ElephantSQL, AWS RDS)
- [ ] Deploy the frontend React app (e.g., Vercel, Netlify)
- [ ] Set up CI/CD pipeline for automated deployments