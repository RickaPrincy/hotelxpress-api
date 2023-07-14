-- Afficher le nombre de réservations effectuées par un client donné durant une période donnée

-- ? : user id
-- ?? : start date
-- ??? : end date

SELECT COUNT(*) FROM "user" 
INNER JOIN "reservation" 
ON "user"."id_user" = "reservation"."id_user"
WHERE "user"."id_user" = ? 
AND "reservation"."date_reservation"
BETWEEN ?? AND ??; 