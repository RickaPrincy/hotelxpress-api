-- ALL CREATE TABLE HERE

-- create table "user_type"
create table "user_type"(
    id_user_type serial PRIMARY KEY,
    user_role varchar not null (50) 
);
-- create table "user"
create table "user"(
    id_user serial PRIMARY KEY,
    first_name varchar(255),
    last_name varchar (255),
    gender char(1) check (gender in('M','F')),
    email varchar(50) not null UNIQUE,
    phone_number varchar (30) not null UNIQUE,
    profil_url varchar (255),
    birthdate date,
    password varchar(20) not null,
    user_user_type int not null references user_type(id_user_type)
);
-- create table reservation
create table "reservation"(
    id_reservation serial PRIMARY KEY,
    arrival_date timestamp not null,
    departure_date timestamp not null,
    booking_date timestamp not null,
    user_reservation int not null references "user"(id_user)
);
-- create table payement
create table "payement"(
    id_payement serial Primary Key,
    payement_date timestamp not null,
    payement_method varchar (20) not null,
    amount_paid  double not null,
    payement_reservation int not null references reservation(id_reservation)
);
-- create table room
create table "room"(
    id_room serial PRIMARY KEY
);
-- create table reservation_contain
create table "reservation_contain"(
    id_reservation_contain serial PRIMARY KEY,
    reservation_contain_room int not null references room(id_room),
    reservation_contain_reservation int not null references reservation(id_reservation)
);

-- CREATE ROOM_TYPE
CREATE TABLE "room_type" (
    "id_room_type" SERIAL PRIMARY KEY,
    "type" VARCHAR(100) UNIQUE NOT NULL
);

-- CREATE ROOM_CONTENT 
CREATE TABLE "room_content" (
    "id_content" SERIAL PRIMARY KEY,
    "content_name" VARCHAR(100) UNIQUE NOT NULL,
    "content_url_img" VARCHAR(255) NOT NULL
);

-- CREATE ROOM
CREATE TABLE "room" (
    "id_room"  SERIAL PRIMARY KEY,
    "room_category" VARCHAR(100) NOT NULL,
    "room_name" VARCHAR(100) NOT NULL,
    "room_url_img" INT NOT NULL,
    "description" TEXT,
    "price_per_night" DOUBLE PRECISION NOT NULL,
    "price_per_hour" DOUBLE PRECISION NOT NULL,
    "type" INT REFERENCES "room_type"("id") NOT NULL
);

-- CREATE ROOM_CONTENT 
CREATE TABLE "room_contain" (
    "id_contain" SERIAL PRIMARY KEY,
    "id_content" INT REFERENCES "room_content"("id_contain") NOT NULL,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL
);

-- CREATE GIVE_ROOM_FEEADBACK
CREATE TABLE "give_room_feedback" (
    "id_room_feedback" SERIAL PRIMARY KEY,
    "text_body" TEXT NOT NULL,
    "date_feedback" DATE CHECK ("date_feedback" > CURRENT_DATE) DEFAULT CURRENT_DATE NOT NULL,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL
);

--CREATE GIVE_HOTEL_FEEDBACK
CREATE TABLE "give_hotel_feeback" (
    "id_give_hotel_feeback" SERIAL PRIMARY KEY,
    "text_body" TEXT NOT NULL,
    "date_feedback" DATE CHECK ("date_feedback" > CURRENT_DATE) DEFAULT CURRENT_DATE NOT NULL,
    "id_hotel" INT REFERENCES "hotel"("id_hotel") NOT NULL,
    "id_user" INT REFERENCES "user"("id_user") NOT NULL
);

-- CREATE PARTNERSHIP
CREATE TABLE "partnership" (
    "id_partnership" SERIAL PRIMARY KEY,
    "date_proposition" timestamp NOT NULL,
    "partnership_type" VARCHAR(200) NOT NULL,
    "is_accepted" BOOLEAN ,
    "massage" TEXT NOT NULL
);
