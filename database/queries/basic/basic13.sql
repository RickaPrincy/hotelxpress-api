--Afficher la liste des chambres dont la description correspond à des mots-clés données 

SELECT DISTINCT h.*
FROM hotels h
JOIN rooms r ON h.hotel_id = r.hotel_id
WHERE r.description LIKE '%keyword1%'
   OR r.description LIKE '%keyword2%'
   OR r.description LIKE '%keyword3%';
