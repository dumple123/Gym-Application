# Gym App Requirements

## Functional Requirements

### 1. User Management
- Users can **sign up** and **log in** to their account.
- Users can **reset their password** if forgotten.
- Passwords must be encrypted.
- Users can sign in with **Google**.
- **2FA** (Two-Factor Authentication) for added security.

### 2. Workout Logging
- Users can **create a workout log** by entering:
  - Date of the workout (defaults to the current date).
  - Exercises performed during the workout, including:
    - Exercise name
    - Sets, reps, and weight lifted for each set
    - Total work per set (calculated as `weight * reps * sets`)
    - Average work per exercise (calculated based on total work and number of sets)
  - **Workout presets**: Users can create and select workout templates (e.g., leg day, push/pull/legs) to save time by reusing common workout routines.
- Users can **edit** and **delete workout entries**.
- Each set of a workout will be recorded individually to account for changes in weight or reps (e.g., during dropsets).

### 3. Exercise Management
- Users can **add custom exercises** to track different lifts.
- The app includes some **default exercises** (e.g., Bench Press, Squat, Deadlift).
- Each exercise has:
  - A **description**.
  - A list of **targeted muscles** (major and minor involvement).
  - **Tags** for muscle involvement (e.g., major chest activation for bench press, minor front delt activation).
- Users can **categorize exercises** by muscle group or type (e.g., strength, cardio).

### 4. Progress Tracking
- Users can **view progress** for each tracked exercise over time.
- The app should display **graphs** showing weight/reps progress for each exercise.
- Users can view **workout history** for each exercise, including:
  - Date of workout
  - Sets, reps, weight lifted
  - Total work per set
  - Average work per exercise

### 5. Personal Records (PR) Tracking
- The app should automatically detect **new personal records** (highest weight lifted for an exercise).
- Users should receive a **notification or badge** when a new PR is achieved.
- Users can view a list of all-time **PRs** for different exercises.

### 6. Stats and Summaries
- Users can see a **summary of recent workouts**, including:
  - Total volume lifted
  - Number of sets and reps
  - Workout frequency
- Display stats like **total volume lifted over time** and **average reps/sets**.
- Users can see **personal bests** and historical progress for each tracked exercise.

### 7. Workout Presets
- Users can create and **save workout presets** for efficiency (e.g., 'leg day', 'push day').
- Presets include pre-selected exercises with sets, reps, and weights, which users can select and modify for each workout.

---

## Non-Functional Requirements

### 1. Usability
- The app should be **intuitive** and easy to use, with a simple and clean user interface.
- Navigation should be **easy**, with quick access to common features like workout logging, progress tracking, and viewing personal records.

### 2. Performance
- Data should load quickly, especially for **workout logs** and **progress graphs**.
- The app should handle a large amount of data without lag, such as many logged workouts and records over time.

### 3. Data Storage
- All user data (e.g., workout logs, personal records) should be securely stored in a **database**.
- Data should be stored in a way that allows for **quick retrieval**, especially for recent workout entries and progress visualization.
- The app will track the **total work per set** and **average work per exercise** to help users analyze their workouts.

### 4. Security
- User data, especially authentication credentials, must be securely handled (e.g., password hashing, secure database storage).
- If using a cloud-based backend, follow best practices for securing the database and API.

### 5. Cross-Platform Compatibility (if making a mobile app)
- The app should work consistently across **Android** and **iOS** devices (or if it’s a web app, it should be responsive).
- Ensure consistency in **data** and **functionality** across platforms.

### 6. Scalability
- The app should be able to support an increasing number of users without significant performance degradation.
- The **database structure** should allow for scalability as more users log workouts, track exercises, and save workout presets.

---