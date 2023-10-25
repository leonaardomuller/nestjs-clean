/*
  Warnings:

  - You are about to drop the `interests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserInterests" DROP CONSTRAINT "_UserInterests_A_fkey";

-- DropTable
DROP TABLE "interests";

-- CreateTable
CREATE TABLE "genders" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imagesUrl" TEXT[],

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "author_id" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genders_title_key" ON "genders"("title");

-- AddForeignKey
ALTER TABLE "_UserInterests" ADD CONSTRAINT "_UserInterests_A_fkey" FOREIGN KEY ("A") REFERENCES "genders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
