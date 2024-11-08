/*
  Warnings:

  - Added the required column `updatedAt` to the `WorkoutSession` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workoutName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_WorkoutSession" ("id", "workoutName") SELECT "id", "workoutName" FROM "WorkoutSession";
DROP TABLE "WorkoutSession";
ALTER TABLE "new_WorkoutSession" RENAME TO "WorkoutSession";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
