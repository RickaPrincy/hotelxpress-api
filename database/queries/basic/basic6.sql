-- Afficher la liste des réservations d'un client donné

-- ? : id of the given user
SELECT "reservation".* FROM "reservation" 
INNER JOIN "user" ON "user"."id_user" = "reservation"."id_reservation"
WHERE "user"."id_user" = $1;