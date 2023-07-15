	-- 	3-Afficher le nombre total de réservations par type de chambre (par exemple : VIP : 30 réservations, Simple : 40 réservations...) :
   	
SELECT r.room_type, COUNT(*) AS total_reservations
FROM room r
JOIN reservation res ON r.id_room = res.id_room
GROUP BY r.room_type;