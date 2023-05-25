/*
  Warnings:

  - You are about to drop the column `favortie` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "favortie",
ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false;
