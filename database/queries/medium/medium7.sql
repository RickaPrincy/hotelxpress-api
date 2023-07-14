-- Afficher chaque client, et le nombre de fois où il a annulé une reservation
SELECT "user"."id_user", "user"."first_name", COUNT(DISTINCT "reservation"."id_reservation")
FROM "user"
LEFT JOIN "reservation" ON "user"."id_user" = "reservation"."id_user" AND "reservation"."is_annulled" = TRUE
GROUP BY "user"."id_user", "user"."first_name";