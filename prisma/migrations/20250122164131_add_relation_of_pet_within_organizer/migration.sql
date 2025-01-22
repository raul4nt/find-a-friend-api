/*
  Warnings:

  - Added the required column `city` to the `organizers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `organizers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizerId` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organizers" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "organizerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "organizers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
