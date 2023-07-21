--Afficher la liste des chambres qui répondent à de multiples critères, par ex: y a le wifi, eau chaude, balcon, jacuzzi, 
--et qui peuvent contenir X personnes selon le besoin du client

SELECT *
FROM rooms
WHERE wifi = true
  AND hot_water = true
  AND balcony = true
  AND jacuzzi = true
  AND capacity >= X;
