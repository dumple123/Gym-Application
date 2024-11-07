-- CreateTable
CREATE TABLE "Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exerciseTemplateId" INTEGER NOT NULL,
    "description" TEXT,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "weight" REAL NOT NULL,
    "boilerplate" TEXT,
    "workoutSessionId" INTEGER,
    CONSTRAINT "Exercise_workoutSessionId_fkey" FOREIGN KEY ("workoutSessionId") REFERENCES "WorkoutSession" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WorkoutSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
