--Afficher la liste des chambres qui seront libres (au moins pour un jour) la semaine prochaine

SELECT *
FROM rooms
WHERE room_id NOT IN (
  SELECT room_id
  FROM reservations
  WHERE check_in_date < CURRENT_DATE + INTERVAL '7 days'
    AND check_out_date >= CURRENT_DATE
);
