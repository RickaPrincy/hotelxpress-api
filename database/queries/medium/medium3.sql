--Afficher la liste des chambres qui seront libres demain

SELECT *
FROM rooms
WHERE room_id NOT IN (
  SELECT room_id
  FROM reservations
  WHERE check_in_date <= CURRENT_DATE + INTERVAL '1 day'
  AND check_out_date > CURRENT_DATE + INTERVAL '1 day'
);
