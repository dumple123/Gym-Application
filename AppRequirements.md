# Gym App Requirements

## Functional Requirements

### 1. User Management
- Users can **sign up** and **log in** to their account.
- Users can **reset their password** if forgotten. 
- Passwords must be encrypted
- Users can sign in with google 
- 2FA
### 2. Workout Logging
- Users can **create a workout log** by entering:
  - Date of the workout (defaults to the current date).
  - Exercises performed during the workout.
  - Details for each exercise, including sets, reps, and weight lifted.
  - Workout templates can be created so users don't have to renter every exercise everyday(i.e push/pull/legs days)
- Users can **edit** and **delete workout entries**.

### 3. Exercise Management
- Users can **add custom exercises** to track different lifts.
- The app should include some **default exercises** (e.g., Bench Press, Squat, Deadlift).
- Users can categorize exercises (e.g., by muscle group or type like strength, cardio, etc.).

### 4. Progress Tracking
- Users can **view progress** for each tracked exercise over time.
- The app should display **graphs** for each exercise showing weight/reps progress over time.
- Users can view **workout history** for each exercise, showing details like date, sets, reps, and weight.

### 5. Personal Records (PR) Tracking
- The app should automatically detect **new personal records** (heaviest weight lifted for an exercise).
- Users should receive a **notification or badge** when a new PR is achieved.
- Users can view a list of all-time PRs for different exercises.

### 6. Goal Setting
- Users can set **goals for specific exercises**, like target weight or reps.
- The app should show **progress towards each goal**.
- Users should be able to mark goals as **achieved** and create new ones.

### 7. Stats and Summaries
- Users can see a **summary of recent workouts**, including the total volume lifted and workout frequency.
- Display stats like **total volume lifted over time** and **average reps/sets**.

---

## Non-Functional Requirements

### 1. Usability
- The app should be intuitive and easy to use, with a simple and clean user interface.
- Navigation should be easy, with quick access to common features like workout logging and progress tracking.

### 2. Performance
- Data should load quickly, especially for workout logs and progress graphs.
- The app should handle a large amount of data without lag, such as many logged workouts over time.

### 3. Data Storage
- All user data (e.g., workout logs, personal records) should be securely stored.
- Data should be stored in a way that allows for quick retrieval, especially for recent workout entries and progress visualization.

### 4. Security
- User data, especially authentication credentials, must be securely handled (e.g., password hashing).
- If using a cloud-based backend, follow best practices for securing the database and API.

### 5. Cross-Platform Compatibility (if making a mobile app)
- The app should work consistently across Android and iOS devices (or if it’s a web app, it should be responsive).
- Ensure consistency in data and functionality across platforms.

### 6. Scalability
- The app should be able to support an increasing number of users without significant performance degradation.
- Database structure should allow for scalability as more users log workouts and track exercises.
