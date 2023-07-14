-- Afficher la liste des réservations en commençant par la plus récente, pour un hotel donné
-- ? : given id of the hotel
SELECT "reservation".* FROM "reservation"
INNER JOIN "reservation_contain" 
ON "reservation"."id_reservation" = "reservation_contain"."id_reservation"
INNER JOIN "room"
ON "reservation_contain"."id_room" = "room"."id_room"
WHERE "room"."id_hotel" = ?
ORDER BY "reservation"."date_reservation" ASC;