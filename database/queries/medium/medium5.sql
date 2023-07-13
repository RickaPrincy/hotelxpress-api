-- Afficher le nombre total des réservations par hotel
SELECT "hotel"."hotel_name", COUNT(DISTINCT "reservation_contain"."id_reservation")
FROM "reservation_contain"
INNER JOIN "room" ON "reservation_contain"."id_room" = "room"."id_room"
RIGHT JOIN "hotel" ON "room"."id_hotel_room" = "hotel"."id_hotel"
GROUP BY "hotel"."hotel_name";