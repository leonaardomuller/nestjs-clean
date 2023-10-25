-- CreateTable
CREATE TABLE "interests" (
    "id" TEXT NOT NULL,
    "imagesUrl" TEXT[],
    "gender" TEXT NOT NULL,

    CONSTRAINT "interests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_interests" (
    "user_id" TEXT NOT NULL,
    "interest_id" TEXT NOT NULL,

    CONSTRAINT "user_interests_pkey" PRIMARY KEY ("user_id","interest_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "interests_gender_key" ON "interests"("gender");

-- AddForeignKey
ALTER TABLE "user_interests" ADD CONSTRAINT "user_interests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_interests" ADD CONSTRAINT "user_interests_interest_id_fkey" FOREIGN KEY ("interest_id") REFERENCES "interests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
