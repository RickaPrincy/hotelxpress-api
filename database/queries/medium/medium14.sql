SELECT p.payment_id, p.amount, r.last_name, r.first_name
FROM payments p
JOIN receptionists r ON p.receptionist_id = r.receptionist_id;
