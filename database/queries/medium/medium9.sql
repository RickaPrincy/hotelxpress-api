-- Afficher la liste des chambres occupées actuellement
SELECT r."room_name", r."room_category", r."description"
FROM "room" r
INNER JOIN "reservation_contain" rc ON r."id_room" = rc."id_room"
INNER JOIN "reservation" res ON rc."id_reservation" = res."id_reservation"
WHERE res."arrival" <= CURRENT_TIMESTAMP AND res."departure" > CURRENT_TIMESTAMP;


