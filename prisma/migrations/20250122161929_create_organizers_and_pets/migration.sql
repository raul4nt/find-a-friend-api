-- CreateEnum
CREATE TYPE "AnimalSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "AnimalAge" AS ENUM ('JUVENILE', 'ADULT', 'SENIOR');

-- CreateEnum
CREATE TYPE "AnimalEnergyLevel" AS ENUM ('VERYLOW', 'LOW', 'AVERAGE', 'HIGH', 'VERYHIGH');

-- CreateEnum
CREATE TYPE "AnimalIndependencyLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "AnimalEnvironment" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "adoptionReqs" TEXT[],
    "size" "AnimalSize" NOT NULL,
    "age" "AnimalAge" NOT NULL,
    "energy" "AnimalEnergyLevel" NOT NULL,
    "environment" "AnimalEnvironment" NOT NULL,
    "independency" "AnimalIndependencyLevel" NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organizers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizers_email_key" ON "organizers"("email");
