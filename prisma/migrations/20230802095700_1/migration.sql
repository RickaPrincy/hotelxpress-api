-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255),
    "gender" CHAR(1),
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(30) NOT NULL,
    "profil_url_img" VARCHAR(255),
    "nationality" VARCHAR(255),
    "birthdate" DATE,
    "password" VARCHAR(255) NOT NULL,
    "id_user_type" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "UserType" (
    "id_user_type" SERIAL NOT NULL,
    "user_type" VARCHAR(255) NOT NULL,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id_user_type")
);

-- CreateTable
CREATE TABLE "GiveHotelFeedback" (
    "text_body" TEXT NOT NULL,
    "date_feedback" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_hotel" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "note" INTEGER,

    CONSTRAINT "GiveHotelFeedback_pkey" PRIMARY KEY ("id_hotel","id_user")
);

-- CreateTable
CREATE TABLE "GiveRoomFeedback" (
    "text_body" TEXT NOT NULL,
    "date_feedback" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_room" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "note" INTEGER,

    CONSTRAINT "GiveRoomFeedback_pkey" PRIMARY KEY ("id_room","id_user")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id_bookmark" SERIAL NOT NULL,
    "bookmark_name" VARCHAR(255) NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_room" INTEGER NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id_bookmark")
);

-- CreateTable
CREATE TABLE "Partnership" (
    "id_partnership" SERIAL NOT NULL,
    "date_proposition" TIMESTAMP NOT NULL,
    "partnership_type" VARCHAR(255) NOT NULL,
    "is_accepted" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT NOT NULL,

    CONSTRAINT "Partnership_pkey" PRIMARY KEY ("id_partnership")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id_reservation" SERIAL NOT NULL,
    "arrival" TIMESTAMP NOT NULL,
    "departure" TIMESTAMP NOT NULL,
    "date_reservation" TIMESTAMP NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id_reservation")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id_payment" SERIAL NOT NULL,
    "date_payement" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method_payment" VARCHAR(50) NOT NULL,
    "amount_paid" DECIMAL(65,30) NOT NULL,
    "id_reservation" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id_payment")
);

-- CreateTable
CREATE TABLE "Room" (
    "id_room" SERIAL NOT NULL,
    "room_category" VARCHAR(100) NOT NULL,
    "room_name" VARCHAR(100) NOT NULL,
    "room_url_img" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price_per_night" DECIMAL(65,30) NOT NULL,
    "price_per_hour" DECIMAL(65,30) NOT NULL,
    "id_room_type" INTEGER NOT NULL,
    "id_hotel" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id_room")
);

-- CreateTable
CREATE TABLE "RoomContent" (
    "id_room_content" SERIAL NOT NULL,
    "content_name" VARCHAR(100) NOT NULL,
    "content_url_img" VARCHAR(255) NOT NULL,

    CONSTRAINT "RoomContent_pkey" PRIMARY KEY ("id_room_content")
);

-- CreateTable
CREATE TABLE "RoomType" (
    "id_room_type" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "RoomType_pkey" PRIMARY KEY ("id_room_type")
);

-- CreateTable
CREATE TABLE "ReservationContain" (
    "room_quantity" INTEGER NOT NULL DEFAULT 1,
    "id_room" INTEGER NOT NULL,
    "id_reservation" INTEGER NOT NULL,

    CONSTRAINT "ReservationContain_pkey" PRIMARY KEY ("id_room","id_reservation")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id_hotel" SERIAL NOT NULL,
    "room_category" VARCHAR(100) NOT NULL,
    "hotel_name" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "id_resto" INTEGER,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id_hotel")
);

-- CreateTable
CREATE TABLE "Promotion" (
    "id_promotion" SERIAL NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "reduction" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id_promotion")
);

-- CreateTable
CREATE TABLE "Media" (
    "id_media" SERIAL NOT NULL,
    "url_media" VARCHAR(255) NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id_media")
);

-- CreateTable
CREATE TABLE "Resto" (
    "id_resto" SERIAL NOT NULL,
    "speciality" VARCHAR(255) NOT NULL,
    "resto_url_img" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Resto_pkey" PRIMARY KEY ("id_resto")
);

-- CreateTable
CREATE TABLE "_PartnershipToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RoomToRoomContent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HotelToPromotion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HotelToMedia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HotelToPartnership" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "RoomContent_content_name_key" ON "RoomContent"("content_name");

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_id_resto_key" ON "Hotel"("id_resto");

-- CreateIndex
CREATE UNIQUE INDEX "_PartnershipToUser_AB_unique" ON "_PartnershipToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PartnershipToUser_B_index" ON "_PartnershipToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoomToRoomContent_AB_unique" ON "_RoomToRoomContent"("A", "B");

-- CreateIndex
CREATE INDEX "_RoomToRoomContent_B_index" ON "_RoomToRoomContent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HotelToPromotion_AB_unique" ON "_HotelToPromotion"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelToPromotion_B_index" ON "_HotelToPromotion"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HotelToMedia_AB_unique" ON "_HotelToMedia"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelToMedia_B_index" ON "_HotelToMedia"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HotelToPartnership_AB_unique" ON "_HotelToPartnership"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelToPartnership_B_index" ON "_HotelToPartnership"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_user_type_fkey" FOREIGN KEY ("id_user_type") REFERENCES "UserType"("id_user_type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiveHotelFeedback" ADD CONSTRAINT "GiveHotelFeedback_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiveHotelFeedback" ADD CONSTRAINT "GiveHotelFeedback_id_hotel_fkey" FOREIGN KEY ("id_hotel") REFERENCES "Hotel"("id_hotel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiveRoomFeedback" ADD CONSTRAINT "GiveRoomFeedback_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiveRoomFeedback" ADD CONSTRAINT "GiveRoomFeedback_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_id_reservation_fkey" FOREIGN KEY ("id_reservation") REFERENCES "Reservation"("id_reservation") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_id_room_type_fkey" FOREIGN KEY ("id_room_type") REFERENCES "RoomType"("id_room_type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_id_hotel_fkey" FOREIGN KEY ("id_hotel") REFERENCES "Hotel"("id_hotel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationContain" ADD CONSTRAINT "ReservationContain_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservationContain" ADD CONSTRAINT "ReservationContain_id_reservation_fkey" FOREIGN KEY ("id_reservation") REFERENCES "Reservation"("id_reservation") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_id_resto_fkey" FOREIGN KEY ("id_resto") REFERENCES "Resto"("id_resto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartnershipToUser" ADD CONSTRAINT "_PartnershipToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Partnership"("id_partnership") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartnershipToUser" ADD CONSTRAINT "_PartnershipToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToRoomContent" ADD CONSTRAINT "_RoomToRoomContent_A_fkey" FOREIGN KEY ("A") REFERENCES "Room"("id_room") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToRoomContent" ADD CONSTRAINT "_RoomToRoomContent_B_fkey" FOREIGN KEY ("B") REFERENCES "RoomContent"("id_room_content") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToPromotion" ADD CONSTRAINT "_HotelToPromotion_A_fkey" FOREIGN KEY ("A") REFERENCES "Hotel"("id_hotel") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToPromotion" ADD CONSTRAINT "_HotelToPromotion_B_fkey" FOREIGN KEY ("B") REFERENCES "Promotion"("id_promotion") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToMedia" ADD CONSTRAINT "_HotelToMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "Hotel"("id_hotel") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToMedia" ADD CONSTRAINT "_HotelToMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "Media"("id_media") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToPartnership" ADD CONSTRAINT "_HotelToPartnership_A_fkey" FOREIGN KEY ("A") REFERENCES "Hotel"("id_hotel") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelToPartnership" ADD CONSTRAINT "_HotelToPartnership_B_fkey" FOREIGN KEY ("B") REFERENCES "Partnership"("id_partnership") ON DELETE CASCADE ON UPDATE CASCADE;
