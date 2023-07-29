INSERT INTO "room"
(
    "room_category", 
    "room_name",
    "room_url_img",
    "description",
    "price_per_night", 
    "price_per_hour",
    "type",
    "id_hotel"
)
VALUES ( $1, $2, $3 ,$4, $5, $6, $7, $8);