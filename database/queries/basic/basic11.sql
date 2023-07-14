-- Afficher la liste des chambres qui correspondent à un intervalle de prix donné par le client

-- ? : prix min donnée par le client
--  ?? : prix max donnée par le client
SELECT "room_name", "room_category", "description"
FROM "room"
WHERE "price_per_night" BETWEEN (?) AND (??) 
