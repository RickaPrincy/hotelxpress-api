-- Afficher combien de fois le client a reservé dans nos hotels (tout hotel confondu)
-- ? : id of the given user
SELECT COUNT(DISTINCT "reservation"."id_reservation") 
FROM "reservation"
WHERE "reservation"."id_user" = ?;