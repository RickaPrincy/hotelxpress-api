--4--Afficher les promotions en fonction de la saison (période), tout hotel confondu

SELECT * FROM promotions
WHERE start_date <= CURRENT_DATE AND end_date >= CURRENT_DATE;
