-- Afficher la liste des hotels dans une localisation (province) donnée
-- ? province donnée par client
SELECT "hotel_name", "address" 
FROM "hotel"
WHERE "city"=?