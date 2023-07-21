	-- 1--Afficher la liste des receptionnistes, avec l''hotel auquel ils sont rattachés 

SELECT r.first_name, r.last_name, h.hotel_name
FROM receptionist r
JOIN hotel h ON r.id_receptionist = h.id_hotel;
