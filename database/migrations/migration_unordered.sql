-- ALL CREATE TABLE HERE

-- CREATE ROOM_TYPE
CREATE TABLE "room_type" (
    "id_room_type" SERIAL PRIMARY KEY,
    "type" VARCHAR(100)
);

-- CREATE ROOM_CONTENT 
CREATE TABLE "room_content" (
    "id_content" SERIAL PRIMARY KEY,
    "content_name" VARCHAR(100) NOT NULL,
    "content_url_img" VARCHAR(255) NOT NULL
);

-- CREATE ROOM
CREATE TABLE "room" (
    "id_room"  SERIAL PRIMARY KEY,
    "room_category" VARCHAR(100) NOT NULL,
    "room_name" VARCHAR(100) NOT NULL,
    "room_url_img" INT NOT NULL,
    "description" TEXT,
    "price_per_night" DOUBLE NOT NULL,
    "price_per_hour" DOUBLE NOT NULL,
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