/*
  Warnings:

  - You are about to drop the `user_interests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_interests" DROP CONSTRAINT "user_interests_interest_id_fkey";

-- DropForeignKey
ALTER TABLE "user_interests" DROP CONSTRAINT "user_interests_user_id_fkey";

-- DropTable
DROP TABLE "user_interests";

-- CreateTable
CREATE TABLE "_UserInterests" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserInterests_AB_unique" ON "_UserInterests"("A", "B");

-- CreateIndex
CREATE INDEX "_UserInterests_B_index" ON "_UserInterests"("B");

-- AddForeignKey
ALTER TABLE "_UserInterests" ADD CONSTRAINT "_UserInterests_A_fkey" FOREIGN KEY ("A") REFERENCES "interests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInterests" ADD CONSTRAINT "_UserInterests_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
