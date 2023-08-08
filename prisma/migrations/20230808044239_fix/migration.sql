/*
  Warnings:

  - The primary key for the `ReservationContain` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ReservationContain" DROP CONSTRAINT "ReservationContain_pkey",
ADD COLUMN     "id_reservation_contain" SERIAL NOT NULL,
ADD CONSTRAINT "ReservationContain_pkey" PRIMARY KEY ("id_reservation_contain");
