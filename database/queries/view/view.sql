--All necessary views

-- view to get all reservation_id which is active for the current moment
CREATE VIEW "reservation_actual" AS 
(
    SELECT "reservation"."id_reservation"
    FROM "reservation" 
    WHERE "reservation"."is_annulled" = false
    AND "reservation"."arrival" <= CURRENT_TIMESTAMP
    AND "reservation"."departure" >= CURRENT_TIMESTAMP
);

-- view to get total price of reservation 
CREATE VIEW "reservation_price_total" AS 
(
    SELECT "reservation_contain"."id_reservation", SUM("room"."price_per_night" * "reservation_contain"."quantity") as "total_price"
    FROM "reservation_contain" 
    INNER JOIN "room" 
    ON "reservation_contain"."id_room" = "room"."id_room"
    GROUP BY "reservation_contain"."id_reservation"
);

-- view to get total money paid per reservation 
CREATE VIEW "reservation_price_paid" AS (
    SELECT "reservation"."id_reservation", SUM("payment"."amount_paid") as "total_paid"
    FROM "reservation" 
    INNER JOIN "payment" 
    ON "payment"."id_reservation" = "reservation"."id_reservation"
    GROUP BY "reservation"."id_reservation"
);