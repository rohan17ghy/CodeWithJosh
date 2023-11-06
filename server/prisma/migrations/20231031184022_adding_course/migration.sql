-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "audience" TEXT[],
ADD COLUMN     "learningPoints" TEXT[];

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "isFile" BOOLEAN NOT NULL DEFAULT true,
    "isPrevAval" BOOLEAN NOT NULL DEFAULT false,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
