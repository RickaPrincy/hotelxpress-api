-- Ériger une facture avec le montant total à payer (et le reste à payer),
-- le nom du client, la date de réservation, la date de début et de fin

SELECT "reservation"."id_reservation","total_price", "total_paid",("total_price" - "total_paid" ) AS "rest_to_pay", 
"user"."last_name", "reservation"."date_reservation", "reservation"."arrival", "reservation"."departure"
FROM "user"
INNER JOIN "reservation"
ON "reservation"."id_user" = "user"."id_user"
INNER JOIN "reservation_price_total" 
ON "reservation"."id_reservation" = "reservation_price_total"."id_reservation" 
INNER JOIN "reservation_price_paid" 
ON "reservation"."id_reservation" = "reservation_price_paid"."id_reservation";