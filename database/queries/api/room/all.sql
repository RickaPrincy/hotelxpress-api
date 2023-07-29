SELECT "room".*, "hotel".*
FROM "room" 
INNER JOIN "hotel"
ON "room"."id_hotel" = "hotel"."id_hotel";