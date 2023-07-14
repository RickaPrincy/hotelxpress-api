-- Afficher le nombre de réservations effectuées par un client donné durant une période donnée

-- ? : user id
-- ?? : date d'arrivé
-- ??? : date du depart
SELECT COUNT(*) AS reservation_count
FROM "reservation"
WHERE "id_user" = ?
AND "arrival" >= ??
AND "departure" <= ???
