SELECT "room".*, "hotel".*
FROM "room" 
INNER JOIN "hotel"
ON "room"."id_hotel" = "hotel"."id_hotel"
WHERE "room"."id_room" = $1;