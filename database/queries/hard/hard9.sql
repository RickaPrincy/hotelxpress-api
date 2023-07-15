--Pour chaque promotion, afficher le nombre total de reservations qui ont bénéficié de
-- la promotion, par hotel (pour savoir si ça a marché ou non)

SELECT
    p.id_promotion,
    p.name AS promotion_name,
    h.id_hotel,
    h.hotel_name,
    COUNT(*) AS total_reservations
FROM
    promotion p
    INNER JOIN have hv ON p.id_promotion = hv.id_promotion
    INNER JOIN room r ON hv.id_room = r.id_room
    INNER JOIN reservation res ON r.id_room = res.id_room
    INNER JOIN hotel h ON r.id_hotel = h.id_hotel
GROUP BY
    p.id_promotion,
    p.name,
    h.id_hotel,
    h.hotel_name
ORDER BY
    p.id_promotion;