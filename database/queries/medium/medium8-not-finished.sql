-- Afficher la liste des chambres occupées actuellement
SELECT * FROM "room"
INNER JOIN "reservation_contain" ON "room"."id_contain"

SELECT "reservation"."id_reservation"
FROM "reservation" 
WHERE "reservation"."is_annulled" = false
AND "reservation"."arrival" <= CURRENT_TIMESTAMP
AND "reservation"."departure" >= CURRENT_TIMESTAMP;
