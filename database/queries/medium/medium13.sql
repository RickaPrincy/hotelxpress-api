-- Afficher la liste des clients, avec le nombre de reservations, le nombre de reservations annulées, et le total d'argent que le client a payé
SELECT u."id_user", u."first_name", u."last_name", 
       COUNT(r."id_reservation") AS reservation_count,
       COUNT(CASE WHEN r."is_annulled" THEN 1 END) AS cancelled_reservation_count,
       SUM(p."amount_paid") AS total_amount_paid
FROM "user" u
LEFT JOIN "reservation" r ON u."id_user" = r."id_user"
LEFT JOIN "payment" p ON r."id_reservation" = p."id_reservation"
GROUP BY u."id_user", u."first_name", u."last_name";
