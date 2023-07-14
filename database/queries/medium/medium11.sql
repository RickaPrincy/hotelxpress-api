-- Afficher les chambres les plus réservés d'un hotel donné

-- ? : id_hotel donné par le client
SELECT r."room_name", r."room_category", COUNT(rc."id_reservation_contain") AS reservation_count
FROM "room" r
LEFT JOIN "reservation_contain" rc ON r."id_room" = rc."id_room"
WHERE r."id_hotel_room" = '?'
GROUP BY r."room_name", r."room_category"
ORDER BY reservation_count desc
LIMIT 3;