/*
  Warnings:

  - You are about to drop the column `content` on the `events` table. All the data in the column will be lost.
  - Added the required column `gender` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "content",
ADD COLUMN     "finish_at" TIMESTAMP(3),
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "imagesUrl" TEXT[],
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "starts_at" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
