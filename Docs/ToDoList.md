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
  - [ ] `sequelize` - ORM for database interactions
  - [ ] `sequelize-cli` - CLI for Sequelize to manage migrations and seeding
  - [ ] `dotenv` - For managing environment variables
  - [ ] `@koa/cors` - Middleware for enabling CORS

## Backend Development (Node.js with Koa)

### 1. User Management
- [ ] Create user model and migration
- [ ] Implement user registration
- [ ] Implement user login
- [ ] Implement password reset functionality
- [ ] Implement Google sign-in
- [ ] Implement 2FA for security

### 2. Exercise Management
- [ ] Create exercise model and migration
- [ ] Implement API to add default exercises
- [ ] Implement API to add custom exercises (user-specific)
- [ ] Create endpoints to retrieve exercises

### 3. Workout Logging
- [ ] Create workout model and migration
- [ ] Implement API to log workouts (date, exercises, sets, reps, weights)
- [ ] Implement API to edit and delete workout entries

### 4. Progress Tracking
- [ ] Create API to fetch user workout history
- [ ] Implement logic to calculate progress over time (graphs, stats)

### 5. Personal Records (PR) Tracking
- [ ] Create personal records model and migration
- [ ] Implement API to automatically detect and store new PRs
- [ ] Implement API to retrieve all-time PRs

### 6. Workout Presets
- [ ] Create workout preset model and migration
- [ ] Implement API to create, edit, and delete workout presets
- [ ] Implement API to retrieve workout presets

## Frontend Development (React)

### 1. Setup
- [ ] Set up React project
- [ ] Install required packages (React Router, Axios, etc.)
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

### 4. Workout Logging
- [ ] Create workout log form component
- [ ] Implement logic to input exercises, sets, reps, and weights
- [ ] Create component to display logged workouts
- [ ] Implement edit and delete functionality for workouts

### 5. Progress Tracking
- [ ] Create progress tracking component
- [ ] Implement graphs for visualizing progress over time
- [ ] Create summary statistics component

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
- [ ] Choose hosting for the PostgreSQL database
- [ ] Deploy the frontend React app (e.g., Vercel, Netlify)
- [ ] Set up CI/CD pipeline for automated deployments
