-- Afficher la liste des chambres non occupées à une periode données 
SELECT DISTINCT "room".*
FROM "reservation"
INNER JOIN "reservation_contain" 
ON "reservation"."id_reservation" = "reservation_contain"."id_reservation"
RIGHT JOIN "room"
ON "reservation"."id_reservation" = "reservation_contain"."id_reservation"
LEFT JOIN "hotel"
ON "hotel"."id_hotel" = "room"."id_hotel"
WHERE 
    "hotel"."city" = $1
    AND ("reservation"."arrival" NOT BETWEEN $2 AND $3)
    AND ("reservation"."departure" NOT BETWEEN $2 AND $3);