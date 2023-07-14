-- Afficher la liste des chambres occupées actuellement
SELECT "room"."id_room", "room"."room_name" FROM "room"
INNER JOIN "reservation_contain" 
ON "room"."id_room"  = "reservation_contain"."id_room"
INNER JOIN "reservation_actual" 
ON "reservation_contain"."id_reservation" = "reservation_actual"."id_reservation";