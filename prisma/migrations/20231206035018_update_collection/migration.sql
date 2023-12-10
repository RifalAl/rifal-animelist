/*
  Warnings:

  - You are about to alter the column `mal_id` on the `Collection` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `image` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Collection` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    MODIFY `mal_id` INTEGER NOT NULL;
