/*
  Warnings:

  - You are about to drop the column `name` on the `WorkoutSession` table. All the data in the column will be lost.
  - Added the required column `workoutName` to the `WorkoutSession` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workoutName" TEXT NOT NULL
);
INSERT INTO "new_WorkoutSession" ("id") SELECT "id" FROM "WorkoutSession";
DROP TABLE "WorkoutSession";
ALTER TABLE "new_WorkoutSession" RENAME TO "WorkoutSession";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
