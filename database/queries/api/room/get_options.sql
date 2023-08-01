-- Afficher la liste des chambres non occupées à une periode données avec des optoins
SELECT DISTINCT "room".*, "hotel"."city","room_type"."type"
FROM "reservation"
INNER JOIN "reservation_contain" 
ON "reservation"."id_reservation" = "reservation_contain"."id_reservation"
RIGHT JOIN "room"
ON "reservation"."id_reservation" = "reservation_contain"."id_reservation"
LEFT JOIN "hotel"
ON "hotel"."id_hotel" = "room"."id_hotel"
LEFT JOIN "room_type"
ON "room"."id_room_type" = "room_type"."id_room_type"
WHERE NOT "room"."id_room" = -1
    