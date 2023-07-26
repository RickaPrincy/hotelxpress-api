SELECT "hotel"."city", "room".* FROM "hotel"
INNER JOIN "room" ON "hotel"."id_hotel"="room"."id_hotel";