-- Afficher les hotels, avec le nombre de chambres par hotels
SELECT "hotel"."hotel_name", COUNT(DISTINCT "room"."id_room")
FROM "hotel" 
LEFT JOIN "room" ON "hotel"."id_hotel" = "room"."id_hotel_room"
GROUP BY "hotel"."hotel_name";