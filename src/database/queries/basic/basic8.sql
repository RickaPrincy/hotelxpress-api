-- Afficher le total des payements reçus par mobile money
SELECT SUM("amount_paid") AS "total_money_paid" from "payment" 
WHERE "method_payment" = 'Mobile Money';
