-- Afficher la liste des chambres par prix décroissant
SELECT "room_name", "room_category", "room_url_img", "description", "price_per_night"
FROM "room"
ORDER BY "price_per_night" DESC;