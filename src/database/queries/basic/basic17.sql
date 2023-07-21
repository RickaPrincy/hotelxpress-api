-- Afficher l'hotel avec le moin de reservations
SELECT "room"."id_hotel",COUNT(DISTINCT "reservation"."id_reservation")  FROM "reservation"
INNER JOIN "reservation_contain"
ON "reservation"."id_reservation" = "reservation_contain"."id_reservation"
INNER JOIN "room"
ON "room"."id_room" = "reservation_contain"."id_room"
GROUP BY "room"."id_hotel"
ORDER BY COUNT(DISTINCT "reservation"."id_reservation") ASC
LIMIT 1;