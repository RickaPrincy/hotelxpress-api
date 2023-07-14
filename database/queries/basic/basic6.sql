-- Afficher la liste des clients qui n'ont pas encore payé en totalité leurs frais
SELECT "user"."id_user", "user"."first_name"
FROM "user"
INNER JOIN "reservation"
ON "reservation"."id_user" = "user"."id_user"
RIGHT JOIN "reservation_price_paid" 
ON "reservation"."id_reservation" = "reservation_price_paid"."id_reservation"
RIGHT JOIN "reservation_price_total"
ON "reservation"."id_reservation" = "reservation_price_total"."id_reservation"
WHERE ("reservation_price_total"."total_price" - "reservation_price_paid"."total_paid") > 0; 