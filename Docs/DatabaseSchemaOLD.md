# Gym Application Database Schema

## 1. Users Table
- **users**
  - `user_id` (Primary Key, Auto Increment) – Unique identifier for each user.
  - `username` (String, Unique) – Username chosen by the user.
  - `email` (String, Unique) – User's email address.
  - `password_hash` (String) – Hashed password for security.
  - `created_at` (DateTime) – Timestamp for when the user was created.
  - `updated_at` (DateTime) – Timestamp for the last update to the user's profile.

## 2. Exercises Table
- **exercises**
  - `exercise_id` (Primary Key, Auto Increment) – Unique identifier for each exercise.
  - `user_id` (Foreign Key, Nullable) – Links to the `users` table. `NULL` for admin-created exercises (visible to all users); non-NULL for user-created exercises (visible only to the creator).
  - `name` (String) – Name of the exercise (e.g., "Bench Press").
  - `description` (Text) – Detailed description of the exercise.
  - `created_at` (DateTime) – Timestamp for when the exercise was added.
  - `updated_at` (DateTime) – Timestamp for the last update to the exercise.

## 3. Muscle Groups Table
- **muscle_groups**
  - `muscle_id` (Primary Key, Auto Increment) – Unique identifier for each muscle.
  - `name` (String, Unique) – Name of the muscle group (e.g., "Chest", "Front Deltoid", "Triceps").

## 4. Exercise Muscles Table
- **exercise_muscles**
  - `exercise_muscle_id` (Primary Key, Auto Increment) – Unique identifier for each exercise-muscle relationship.
  - `exercise_id` (Foreign Key) – Links to the `exercises` table.
  - `muscle_id` (Foreign Key) – Links to the `muscle_groups` table.
  - `involvement` (String) – Indicates whether the muscle is "major" or "minor" for the exercise.

## 5. Workout Presets Table
- **workout_presets**
  - `preset_id` (Primary Key, Auto Increment) – Unique identifier for each preset.
  - `user_id` (Foreign Key) – Links to the `users` table, associating presets with specific users.
  - `name` (String) – Name of the preset (e.g., "Leg Day").
  - `created_at` (DateTime) – Timestamp for when the preset was created.
  - `updated_at` (DateTime) – Timestamp for the last update to the preset.

## 6. Preset Exercises Table
- **preset_exercises**
  - `preset_exercise_id` (Primary Key, Auto Increment) – Unique identifier for each preset exercise entry.
  - `preset_id` (Foreign Key) – Links to the `workout_presets` table.
  - `exercise_id` (Foreign Key) – Links to the `exercises` table.
  - `order` (Integer) – The sequence/order of the exercise in the preset.
  - `default_reps` (Integer, Nullable) – Default number of reps suggested for this exercise in the preset.
  - `default_sets` (Integer, Nullable) – Default number of sets suggested for this exercise in the preset.
  - `default_weight` (Float, Nullable) – Default weight suggested for this exercise in the preset.

## 7. Workouts Table
- **workouts**
  - `workout_id` (Primary Key, Auto Increment) – Unique identifier for each workout session.
  - `user_id` (Foreign Key) – Links to the `users` table.
  - `preset_id` (Foreign Key, Nullable) – If the workout is based on a preset, links to the `workout_presets` table.
  - `date` (Date) – Date of the workout.
  - `notes` (Text) – Any additional notes about the workout.
  - `start_time` (DateTime, Nullable) – Time the workout began.
  - `end_time` (DateTime, Nullable) – Time the workout ended.
  - `created_at` (DateTime) – Timestamp for when the workout was logged.

## 8. Workout Lifts Table
- **workout_lifts**
  - `workout_lift_id` (Primary Key, Auto Increment) – Unique identifier for each lift entry.
  - `workout_id` (Foreign Key) – Links to the `workouts` table.
  - `exercise_id` (Foreign Key) – Links to the `exercises` table.
  - `average_work` (Float) – Average work performed for this exercise during the workout.
  - `total_volume` (Float) – Total work (weight × reps × sets) for this exercise across all sets in the workout.
  - `intensity` (Float, Nullable) – Intensity relative to the user’s max weight for this exercise, if desired.
  - `custom_reps` (Integer, Nullable) – Custom reps specified for this exercise in the workout session.
  - `custom_sets` (Integer, Nullable) – Custom sets specified for this exercise in the workout session.
  - `custom_weight` (Float, Nullable) – Custom weight specified for this exercise in the workout session.
  - `created_at` (DateTime) – Timestamp for when the lift entry was created.

## 9. Sets Table
- **sets**
  - `set_id` (Primary Key, Auto Increment) – Unique identifier for each set entry.
  - `workout_lift_id` (Foreign Key) – Links to the `workout_lifts` table.
  - `set_number` (Integer) – The sequence number of the set (e.g., Set 1, Set 2, etc.).
  - `reps` (Integer) – Number of reps performed in this set.
  - `weight` (Float) – Weight lifted for this set.
  - `total_work` (Float) – Calculated total work for this set (weight × reps).
  - `notes` (Text, Nullable) – Optional notes specific to this set.
  - `created_at` (DateTime) – Timestamp for when the set entry was created.

## 10. Personal Records Table
- **personal_records**
  - `pr_id` (Primary Key, Auto Increment) – Unique identifier for each PR entry.
  - `user_id` (Foreign Key) – Links to the `users` table.
  - `exercise_id` (Foreign Key) – Links to the `exercises` table.
  - `record_weight` (Float) – The highest weight lifted for the exercise.
  - `date_achieved` (Date) – Date when the PR was achieved.
  - `created_at` (DateTime) – Timestamp for when the PR entry was created.

## 11. Personal Record History Table
- **personal_record_history**
  - `history_id` (Primary Key, Auto Increment) – Unique identifier for each PR history entry.
  - `user_id` (Foreign Key) – Links to the `users` table.
  - `exercise_id` (Foreign Key) – Links to the `exercises` table.
  - `record_weight` (Float) – The weight lifted in this PR entry.
  - `date_achieved` (Date) – Date when this weight was lifted, capturing changes in the user's PRs over time.
  - `created_at` (DateTime) – Timestamp for when this record history entry was created.