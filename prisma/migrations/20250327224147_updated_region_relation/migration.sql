/*
  Warnings:

  - You are about to drop the column `countryId` on the `Region` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[regionId]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `regionId` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_countryId_fkey";

-- DropIndex
DROP INDEX "Region_countryId_key";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "regionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "countryId";

-- CreateIndex
CREATE UNIQUE INDEX "Country_regionId_key" ON "Country"("regionId");

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
