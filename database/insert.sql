-- INSERT INTO "user_type"
INSERT INTO "user_type" ("id_user_type", "user_type") VALUES
(1,'Admin'),
(2,'Receptionnist'),
(3,'Customer');

INSERT INTO "room_content" ("id_content", "content_name", "content_url_img") VALUES
  (1,'TV', 'https://example.com/tv.jpg'),
  (2,'WiFi', 'https://example.com/wifi.jpg'),
  (3,'Jacuzzi', 'https://example.com/jacuzzi.jpg'),
  (4,'Hot water', 'https://example.com/hot-water.jpg'),
  (5,'Bathroom', 'https://example.com/bathroom.jpg'),
  (6,'Bedroom', 'https://example.com/bedroom.jpg'),
  (7,'Entertainment', 'https://example.com/entertainment.jpg'),
  (8,'Food and Beverage', 'https://example.com/food-beverage.jpg'),
  (9,'Internet', 'https://example.com/internet.jpg'),
  (10,'Balcony', 'https://example.com/balcony.jpg'),
  (11,'Garden', 'https://example.com/garden.jpg');


-- INSERT INTO "room_type"
INSERT INTO "room_type" ("id_room_type","type") VALUES
  (1,'Single'),
  (2,'Double'),
  (3,'Suite'),
  (4,'Family'),
  (5,'VIP');

-- INSERT INTO "promotion"
INSERT INTO "promotion" ("id_promotion","start_date", "end_date", "reduction", "description") VALUES
  (1,'2023-12-01', '2023-12-31', 0.1, 'Christmas Promotion'),
  (2,'2024-01-01', '2024-03-31', 0.2, 'Low Season Promotion'),
  (3,'2023-07-15', '2023-08-31', 0.15, 'Summer Vacation Promotion');

-- INSERT INTO "user"
INSERT INTO "user" ("id_user","first_name", "last_name", "gender", "email", "phone_number", "profil_url_img", "nationality", "birthdate", "password", "user_type") VALUES
  (1,'John', 'Doe', 'M', 'john.doe@example.com', '1234567890', 'https://example.com/profile.jpg', 'Malagasy', '1990-01-01', 'password123', 1),
  (2,'Jane', 'Smith', 'F', 'jane.smith@example.com', '0987654321', 'https://example.com/profile.jpg', 'Malagasy', '1992-02-02', 'password456', 2),
  (3,'Michael', 'Johnson', 'M', 'michael.johnson@example.com', '9876543210', 'https://example.com/profile.jpg', 'canadien', '1985-05-05', 'password789', 3),
  (4,'Emily', 'Brown', 'F', 'emily.brown@example.com', '0123456789', 'https://example.com/profile.jpg', 'africain', '1998-08-08', 'passwordabc', 3),
  (5,'David', 'Wilson', 'M', 'david.wilson@example.com', '5678901234', 'https://example.com/profile.jpg', 'USA', '1977-07-07', 'passworddef', 3);


-- INSERT INTO "media"
INSERT INTO "media" ("id_media","url_media") VALUES
  (1,'https://example.com/media1.jpg'),
  (2,'https://example.com/media2.jpg');

-- INSERT INTO "resto"
INSERT INTO "resto" ("id_resto","speciality", "resto_url_img", "description") VALUES
  (1,'Italian', 'https://example.com/italian.jpg', 'Italian Restaurant'),
  (2,'Chinese', 'https://example.com/chinese.jpg', 'Chinese Restaurant'),
  (3,'French', 'https://example.com/french.jpg', 'French Restaurant'),
  (4,'Mexican', 'https://example.com/mexican.jpg', 'Mexican Restaurant'),
  (5,'Japanese', 'https://example.com/japanese.jpg', 'Japanese Restaurant');

-- INSERT INTO "hotel"
INSERT INTO "hotel" ("id_hotel","hotel_name", "address", "city", "state", "phone_number", "id_resto") VALUES
  (1,'Hotel A', '123 Main St', 'New York', 'NY', '1234567890', 1),
  (2,'Hotel B', '456 Elm St', 'Los Angeles', 'CA', '0987654321', 2),
  (3,'Hotel C', '789 Oak St', 'Chicago', 'IL', '9876543210', 3),
  (4,'Hotel D', '321 Pine St', 'Miami', 'FL', '0123456789', 4),
  (5,'Hotel E', '654 Maple St', 'San Francisco', 'CA', '5678901234', 5);

-- INSERT INTO "have_promotion"
INSERT INTO "have_promotion" ("id_promotion", "id_hotel") VALUES
  (3, 3),
  (1, 2);

-- INSERT INTO "room"
INSERT INTO "room" ("id_room","room_category", "room_name", "room_url_img", "description", "price_per_night", "price_per_hour", "type","id_hotel_room") VALUES
  (1,'Standard', 'Room 107', 'https://example.com/room.jpg', 'Standard Room', 100, 10, 4, 2),
  (2,'Deluxe', 'Room 201', 'https://example.com/room.jpg', 'Deluxe Room', 150, 15, 2, 3),
  (3,'Suite', 'Room 301', 'https://example.com/room.jpg', 'Suite Room', 200, 20, 3, 2),
  (4,'Family', 'Room 401', 'https://example.com/room.jpg', 'Family Room', 250, 25, 4,  4),
  (5,'VIP', 'Room 501', 'https://example.com/room.jpg', 'VIP Room', 300, 30, 5, 2);

-- INSERT INTO "room_contain"
INSERT INTO "room_contain" ("id_content", "id_room") VALUES
  (1, 1),
  (2, 1),
  (3, 2);

-- INSERT INTO "give_hotel_feedback"
INSERT INTO "give_hotel_feedback" ("id_give_hotel_feedback","text_body", "date_feedback", "id_hotel", "id_user") VALUES
  (1,'Great hotel!', '2023-07-11', 1, 1),
  (2,'Nice service!', '2023-07-12', 2, 2);

-- INSERT INTO "give_room_feedback"
INSERT INTO "give_room_feedback" ("id_give_room_feedback","text_body", "date_feedback", "id_room", "id_user") VALUES
  (1,'Comfortable room', '2023-04-10', 1, 1),
  (2,'Spacious room', '2023-07-10', 2, 2);

-- INSERT INTO "partnership"
INSERT INTO "partnership" ("id_partnership","date_proposition", "partnership_type", "is_accepted", "message") VALUES
  (1,'2023-07-21 10:00:00', 'Partnership A', true, 'Accepted'),
  (2,'2023-10-01 10:00:00', 'Partnership B', false, 'Pending');

-- INSERT INTO "propose"
INSERT INTO "propose" ("id_propose","id_user", "id_partnership") VALUES
  (1,1, 2),
  (2,2, 1);

-- INSERT INTO "have_proposition"
INSERT INTO "have_proposition" ("id_have_proposition","id_hotel", "id_partnership") VALUES
  (1, 1,2),
  (2, 2,1);

-- INSERT INTO "reservation"
INSERT INTO "reservation" ("id_reservation","arrival", "departure", "date_reservation", "id_user") VALUES
  (2,'2023-12-13 12:00:00', '2024-12-15 12:00:00', '2023-07-01 10:00:00', 3),
  (3,'2023-10-10 12:00:00', '2023-10-15 12:00:00', '2023-07-11 10:00:00', 4);

-- INSERT INTO "payment"
INSERT INTO "payment" ("id_payment","date_payment", "method_payment", "amount_paid", "id_reservation") VALUES
  (1,'2023-07-01 10:00:00', 'Credit Card', 500, 2),
  (2,'2023-07-01 10:00:00', 'PayPal', 600, 3);

-- INSERT INTO "reservation_contain"
INSERT INTO "reservation_contain" ("id_reservation_contain","quantity", "id_room", "id_reservation") VALUES
  (1, 1, 1, 3),
  (2, 2, 2, 2);

-- INSERT INTO "bookmark"
INSERT INTO "bookmark" ("id_bookmark","bookmark_name", "id_user") VALUES
  (1,'Favorites', 1),
  (2,'Wishlist', 2);

-- INSERT INTO "bookmark_contain"
INSERT INTO "bookmark_contain" ("id_bookmark_contain","id_room", "id_bookmark") VALUES
  (1,1, 1),
  (2,2, 2);

  ----- other insert for test -----

INSERT INTO "payment" ("id_payment","date_payment","method_payment","amount_paid", "id_reservation")
VALUES (3, '2023-07-03 02:01:01', 'Mobile Money',5050.2,2),
(4, '2022-03-03 02:01:01', 'Mobile Money',500,3);

INSERT INTO "reservation" ("id_reservation","arrival", "departure", "date_reservation", "id_user") VALUES
(4,'2024-12-13 12:00:00', '2024-12-15 12:00:00', '2023-01-01 10:00:00', 3);

INSERT INTO "reservation" ("id_reservation","arrival", "departure", "date_reservation", "id_user") VALUES
(5,'2023-07-14 00:07:00', '2024-12-15 12:00:00', '2023-01-01 10:00:00', 3);


INSERT INTO "reservation_contain" ("id_reservation_contain","quantity", "id_room", "id_reservation") VALUES
(3, 1, 1, 4);

UPDATE "reservation" SET "is_annulled" = TRUE WHERE "id_user" = 3;

UPDATE "reservation" SET "is_annulled" = TRUE WHERE "id_user" = 4;

UPDATE "reservation" SET "departure" = '2023-08-01 03:03:03', "arrival" = '2023-08-08 01:01:01'
WHERE "id_reservation" = 5;

UPDATE "reservation" SET "is_annulled" = FALSE
WHERE "id_reservation" = 5;


INSERT INTO "reservation_contain" ("id_reservation_contain","quantity", "id_room", "id_reservation") VALUES
  (4, 1, 3, 5);
