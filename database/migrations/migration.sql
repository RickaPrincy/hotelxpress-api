-- The final migration will be here

\c postgres

DROP DATABASE hotelxpress;
CREATE DATABASE hotelxpress;

\c hotelxpress

-- CREATE "user_type"
CREATE TABLE "user_type"(
    "id_user_type" SERIAL PRIMARY KEY,
    "user_type" VARCHAR(255) UNIQUE NOT NULL
);

-- CREATE ROOM_CONTENT 
CREATE TABLE "room_content" (
    "id_content" SERIAL PRIMARY KEY,
    "content_name" VARCHAR(100) UNIQUE NOT NULL,
    "content_url_img" VARCHAR(255) NOT NULL
);

-- CREATE ROOM_TYPE
CREATE TABLE "room_type" (
    "id_room_type" SERIAL PRIMARY KEY,
    "type" VARCHAR(100) UNIQUE NOT NULL
);

-- CREATE PROMOTION  
CREATE TABLE "promotion" (
    "id_promotion" SERIAL PRIMARY KEY,
    "start_date" DATE CHECK ("start_date" >= CURRENT_DATE) NOT NULL,
    "end_date" DATE CHECK ("end_date" > "start_date") NOT NULL,
    "reduction" DOUBLE PRECISION CHECK ("reduction" > 0) NOT NULL,
    "description" TEXT NOT NULL
);

-- CREATE USER 
CREATE TABLE "user"(
    "id_user" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255),
    "gender" CHAR(1) CHECK ("gender" IN('M','F')),
    "email" VARCHAR(50) UNIQUE NOT NULL,
    "phone_number" VARCHAR(30) UNIQUE NOT NULL,
    "profil_url_img" VARCHAR(255),
    "nationality" VARCHAR(255),
    "birthdate" DATE CHECK ("birthdate" < CURRENT_DATE),
    "password" VARCHAR(255) NOT NULL,
    "user_type" INT REFERENCES "user_type"("id_user_type") NOT NULL 
);

-- CREATE MEDIA
CREATE TABLE "media"(
    "id_media" SERIAL PRIMARY KEY,
    "url_media" VARCHAR(255) NOT NULL
);

-- CREATE RESTO
CREATE TABLE "resto"(
    "id_resto" SERIAL PRIMARY KEY,
    "speciality" VARCHAR (255),
    "resto_url_img" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL
);

-- CREATE HOTEL
CREATE TABLE "hotel" (
    "id_hotel"SERIAL PRIMARY KEY,
    "hotel_name" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(100) NOT NULL,
    "id_resto" INT REFERENCES "resto"("id_resto")
);

-- CREATE HAVE_PROMOTION
CREATE TABLE "have_promotion" (
  "id_have_promotion" SERIAL PRIMARY KEY,
  "id_promotion" INT REFERENCES "promotion"("id_promotion") NOT NULL,
  "id_hotel" INT REFERENCES "hotel"("id_hotel") NOT NULL
);

-- CREATE ROOM
CREATE TABLE "room" (
    "id_room"  SERIAL PRIMARY KEY,
    "room_category" VARCHAR(100) NOT NULL,
    "room_name" VARCHAR(100) NOT NULL,
    "room_url_img" varchar(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price_per_night" DOUBLE PRECISION NOT NULL,
    "price_per_hour" DOUBLE PRECISION NOT NULL,
    "type" INT REFERENCES "room_type"("id_room_type") NOT NULL,
    "id_hotel_room" INT REFERENCES "hotel"("id_hotel") NOT NULL
);

-- CREATE ROOM_CONTAIN 
CREATE TABLE "room_contain" (
    "id_contain" SERIAL PRIMARY KEY,
    "id_content" INT REFERENCES "room_content"("id_content") NOT NULL,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL
);

-- CREATE FEEDBCK HOTEL
CREATE TABLE "give_hotel_feedback" (
    "id_give_hotel_feeback" SERIAL PRIMARY KEY,
    "text_body" TEXT NOT NULL,
    "date_feedback" DATE CHECK ("date_feedback" > CURRENT_DATE) DEFAULT CURRENT_DATE NOT NULL,
    "id_hotel" INT REFERENCES "hotel"("id_hotel") NOT NULL,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL
);

-- CREATE FEEDBACK ROOM 
CREATE TABLE "give_room_feedback" (
    "id_room_feedback" SERIAL PRIMARY KEY,
    "text_body" TEXT NOT NULL,
    "date_feedback" DATE CHECK ("date_feedback" > CURRENT_DATE) DEFAULT CURRENT_DATE NOT NULL,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL
);

-- CREATE PARTENAIRSHIP
CREATE TABLE "partnership" (
    "id_partnership" SERIAL PRIMARY KEY,
    "date_proposition" TIMESTAMP CHECK ( "date_proposition" >= CURRENT_DATE ) NOT NULL,
    "partnership_type" VARCHAR(200) NOT NULL,
    "is_accepted" BOOLEAN,
    "message" TEXT NOT NULL
);

-- CREATE PROPOSE
CREATE TABLE "propose" (
    "id_propse" SERIAL PRIMARY KEY,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL,
    "id_partnership" INT REFERENCES "partnership"("id_partnership") NOT NULL
); 

-- CREATE HAVE PROPOSITION
CREATE TABLE "have_proposition" (
    "id_have_proposition" SERIAL PRIMARY KEY,
    "id_hotel" INT REFERENCES "hotel"("id_hotel") NOT NULL,
    "id_partnership" INT REFERENCES "partnership"("id_partnership") NOT NULL
);

-- CREATE RESERVATION
CREATE TABLE "reservation"(
    "id_reservation" SERIAL PRIMARY KEY,
    "arrival" TIMESTAMP CHECK ("arrival" > CURRENT_TIMESTAMP) NOT NULL,
    "departure" TIMESTAMP CHECK ("departure" > CURRENT_TIMESTAMP) NOT NULL,
    "date_reservation" TIMESTAMP CHECK ("date_reservation" < CURRENT_TIMESTAMP)NOT NULL,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL
);

-- CREATE PAIMENT
CREATE TABLE "payment"(
    "id_payement" SERIAL PRIMARY KEY,
    "date_paiment" TIMESTAMP CHECK ("date_paiment" < CURRENT_TIMESTAMP) NOT NULL,
    "method_paiment" VARCHAR(50) NOT NULL,
    "amount_paid" DOUBLE PRECISION NOT NULL,
    "payement_reservation" INT NOT NULL REFERENCES RESERVATION(ID_RESERVATION)
);

-- CREATE RESERVATION CONTAIN
CREATE TABLE "reservation_contain"(
    "id_reservation_contain" SERIAL PRIMARY KEY,
    "quantity" INT CHECK ("quantity" > 0 ) NOT NULL,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL,
    "id_reservation" INT REFERENCES "reservation"("id_reservation") NOT NULL 
);

-- CREATE BOOKMARKS
CREATE TABLE "bookmarks" (
    "id_bookmarks" SERIAL PRIMARY KEY,
    "bookmarks_name" VARCHAR(255) NOT NULL,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL
);

-- CREATE BOOKMARKS CONTAIN
CREATE TABLE "bookmarks_contain"(
    "id_bookmarks_contain" SERIAL PRIMARY KEY,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL,
    "id_bookmarks" INT REFERENCES "bookmarks"("id_bookmarks") NOT NULL
);