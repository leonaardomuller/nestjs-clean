/*
  Warnings:

  - You are about to drop the `genders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserInterests" DROP CONSTRAINT "_UserInterests_A_fkey";

-- DropTable
DROP TABLE "genders";

-- CreateTable
CREATE TABLE "interests" (
    "id" TEXT NOT NULL,
    "imagesUrl" TEXT[],
    "gender" TEXT NOT NULL,

    CONSTRAINT "interests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "interests_gender_key" ON "interests"("gender");

-- AddForeignKey
ALTER TABLE "_UserInterests" ADD CONSTRAINT "_UserInterests_A_fkey" FOREIGN KEY ("A") REFERENCES "interests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
