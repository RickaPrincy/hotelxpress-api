-- Afficher une liste des rooms d'un type donné (chambre simple, twin, vip...), dans un hotel donné
SELECT "room_name"
FROM "room"
JOIN "room_type" ON "room"."type" = "room_type"."id_room_type"
WHERE "room_type"."type" = 'Family'
  AND "room"."id_hotel_room" = '2';

-- Afficher les promotions en fonction de la saison (période), tout hotel confondu
SELECT "description","start_date", "end_date","description"
FROM "promotion";



