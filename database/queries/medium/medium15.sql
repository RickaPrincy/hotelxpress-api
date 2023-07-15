--Afficher la liste des chambres, avec leur prix brut, et leur prix net (c'est-à-dire leur prix 
--en appliquant toutes les réductions qui sont appliquées aujourd'hui)

SELECT r.room_id, r.gross_price, 
       r.gross_price - (r.gross_price * d.percentage / 100) AS net_price
FROM rooms r
LEFT JOIN discounts d ON r.room_id = d.room_id
WHERE d.start_date <= CURRENT_DATE AND d.end_date >= CURRENT_DATE OR d.discount_id IS NULL;
