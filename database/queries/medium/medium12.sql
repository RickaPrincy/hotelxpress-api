-- Afficher la liste des promotions en cours actuellement
SELECT  "start_date", "end_date", "reduction", "description"
FROM "promotion"
WHERE "start_date" <= CURRENT_DATE AND "end_date" >= CURRENT_DATE;
