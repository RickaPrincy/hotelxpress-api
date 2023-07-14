-- Afficher le client avec le plus d'avis négatifs redigés envers les hotels.

-- ? : any word negatif review
SELECT "user"."first_name", "user"."last_name", COUNT(*) AS "negative_reviews_count"
FROM "user" 
JOIN "give_hotel_feedback"  ON u."id_user" = "give_hotel_feedback"."id_user"
WHERE "give_hotel_feedback"."text_body" ILIKE '%?%' 
GROUP BY "user"."id_user"
ORDER BY "negative_reviews_count" DESC
LIMIT 1

