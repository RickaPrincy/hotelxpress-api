CREATE VIEW "reservation_actual" AS 
(
    SELECT "reservation"."id_reservation"
    FROM "reservation" 
    WHERE "reservation"."is_annulled" = false
    AND "reservation"."arrival" <= CURRENT_TIMESTAMP
    AND "reservation"."departure" >= CURRENT_TIMESTAMP
);