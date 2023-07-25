-- Afficher une liste des rooms d'un type donné (chambre simple, twin, vip...), dans un hotel donné

-- ? : given type 
-- ?? : given hotel id 
SELECT "room_name"
FROM "room"
JOIN "room_type" ON "room"."type" = "room_type"."id_room_type"
WHERE "room_type"."type" = $1
AND "room"."id_hotel" = $2;