-- INSERT INTO "user_type"
INSERT INTO "user_type" ("user_type") VALUES
  ('Admin'),
  ('Receptionnist'),
  ('Customer');

-- INSERT INTO "room_content"
INSERT INTO "room_content" ("content_name", "content_url_img") VALUES
  ('TV', 'https://example.com/tv.jpg'),
  ('WiFi', 'https://example.com/wifi.jpg'),
  ('Jacuzzi', 'https://example.com/jacuzzi.jpg'),
  ('Hot water', 'https://example.com/hot-water.jpg'),
  ('Bathroom', 'https://example.com/bathroom.jpg'),
  ('Bedroom', 'https://example.com/bedroom.jpg'),
  ('Entertainment', 'https://example.com/entertainment.jpg'),
  ('Food and Beverage', 'https://example.com/food-beverage.jpg'),
  ('Internet', 'https://example.com/internet.jpg'),
  ('Balcony', 'https://example.com/balcony.jpg'),
  ('Garden', 'https://example.com/garden.jpg');


-- INSERT INTO "room_type"
INSERT INTO "room_type" ("type") VALUES
  ('Single'),
  ('Double'),
  ('Suite'),
  ('Family'),
  ('VIP');

-- INSERT INTO "promotion"
INSERT INTO "promotion" ("start_date", "end_date", "reduction", "description") VALUES
  ('2023-12-01', '2023-12-31', 0.1, 'Christmas Promotion'),
  ('2024-01-01', '2024-03-31', 0.2, 'Low Season Promotion'),
  ('2023-07-15', '2023-08-31', 0.15, 'Summer Vacation Promotion');

-- INSERT INTO "user"
INSERT INTO "user" ("first_name", "last_name", "gender", "email", "phone_number", "profil_url_img", "nationality", "birthdate", "password", "user_type") VALUES
  ('John', 'Doe', 'M', 'john.doe@example.com', '1234567890', 'https://example.com/profile.jpg', 'Malagasy', '1990-01-01', 'password123', 1),
  ('Jane', 'Smith', 'F', 'jane.smith@example.com', '0987654321', 'https://example.com/profile.jpg', 'Malagasy', '1992-02-02', 'password456', 2),
  ('Michael', 'Johnson', 'M', 'michael.johnson@example.com', '9876543210', 'https://example.com/profile.jpg', 'canadien', '1985-05-05', 'password789', 3),
  ('Emily', 'Brown', 'F', 'emily.brown@example.com', '0123456789', 'https://example.com/profile.jpg', 'africain', '1998-08-08', 'passwordabc', 3),
  ('David', 'Wilson', 'M', 'david.wilson@example.com', '5678901234', 'https://example.com/profile.jpg', 'USA', '1977-07-07', 'passworddef', 3);


-- INSERT INTO "media"
INSERT INTO "media" ("url_media") VALUES
  ('https://example.com/media1.jpg'),
  ('https://example.com/media2.jpg');

-- INSERT INTO "resto"
INSERT INTO "resto" ("speciality", "resto_url_img", "description") VALUES
  ('Italian', 'https://example.com/italian.jpg', 'Italian Restaurant'),
  ('Chinese', 'https://example.com/chinese.jpg', 'Chinese Restaurant'),
  ('French', 'https://example.com/french.jpg', 'French Restaurant'),
  ('Mexican', 'https://example.com/mexican.jpg', 'Mexican Restaurant'),
  ('Japanese', 'https://example.com/japanese.jpg', 'Japanese Restaurant');

-- INSERT INTO "hotel"
INSERT INTO "hotel" ("hotel_name", "address", "city", "state", "phone_number", "id_resto") VALUES
  ('Hotel A', '123 Main St', 'New York', 'NY', '1234567890', 1),
  ('Hotel B', '456 Elm St', 'Los Angeles', 'CA', '0987654321', 2),
  ('Hotel C', '789 Oak St', 'Chicago', 'IL', '9876543210', 3),
  ('Hotel D', '321 Pine St', 'Miami', 'FL', '0123456789', 4),
  ('Hotel E', '654 Maple St', 'San Francisco', 'CA', '5678901234', 5);

-- INSERT INTO "have_promotion"
INSERT INTO "have_promotion" ("id_promotion", "id_hotel") VALUES
  (4, 3),
  (5, 2);

-- INSERT INTO "room"
INSERT INTO "room" ("room_category", "room_name", "room_url_img", "description", "price_per_night", "price_per_hour", "type","id_hotel_room") VALUES
  ('Standard', 'Room 107', 'https://example.com/room.jpg', 'Standard Room', 100, 10, 4, 2),
  ('Deluxe', 'Room 201', 'https://example.com/room.jpg', 'Deluxe Room', 150, 15, 2, 3),
  ('Suite', 'Room 301', 'https://example.com/room.jpg', 'Suite Room', 200, 20, 3, 2),
  ('Family', 'Room 401', 'https://example.com/room.jpg', 'Family Room', 250, 25, 4,  4),
  ('VIP', 'Room 501', 'https://example.com/room.jpg', 'VIP Room', 300, 30, 5, 2);

-- INSERT INTO "room_contain"
INSERT INTO "room_contain" ("id_content", "id_room") VALUES
  (1, 1),
  (2, 1),
  (3, 2);

-- INSERT INTO "give_hotel_feedback"
INSERT INTO "give_hotel_feeback" ("text_body", "date_feedback", "id_hotel", "id_user") VALUES
  ('Great hotel!', '2023-07-13', 1, 1),
  ('Nice service!', '2023-07-15', 2, 2);

-- INSERT INTO "give_room_feedback"
INSERT INTO "give_room_feedback" ("text_body", "date_feedback", "id_room", "id_user") VALUES
  ('Comfortable room', '2023-07-16', 1, 1),
  ('Spacious room', '2023-07-17', 2, 2);

-- INSERT INTO "partnership"
INSERT INTO "partnership" ("date_proposition", "partnership_type", "is_accepted", "massage") VALUES
  ('2023-07-21 10:00:00', 'Partnership A', true, 'Accepted'),
  ('2023-10-01 10:00:00', 'Partnership B', false, 'Pending');

-- INSERT INTO "propose"
INSERT INTO "propose" ("id_user", "id_partnership") VALUES
  (1, 2),
  (2, 3);

-- INSERT INTO "have_proposition"
INSERT INTO "have_proposition" ("id_hotel", "id_partnership") VALUES
  (1, 2),
  (2, 3);

-- INSERT INTO "reservation"
INSERT INTO "reservation" ("arrival", "departure", "date_reservation", "id_user") VALUES
  ('2023-07-13 12:00:00', '2023-07-15 12:00:00', '2023-07-01 10:00:00', 3),
  ('2023-10-10 12:00:00', '2023-10-15 12:00:00', '2023-07-11 10:00:00', 4);

-- INSERT INTO "payment"
INSERT INTO "payement" ("date_paiment", "method_paiment", "amount_paid", "payement_reservation") VALUES
  ('2023-07-01 10:00:00', 'Credit Card', 500, 3),
  ('2023-07-01 10:00:00', 'PayPal', 600, 4);

-- INSERT INTO "reservation_contain"
INSERT INTO "reservation_contain" ("quantity", "id_room", "id_reservation") VALUES
  (1, 1, 1),
  (2, 2, 2);

-- INSERT INTO "bookmarks"
INSERT INTO "bookmarks" ("bookmarks_name", "id_user") VALUES
  ('Favorites', 1),
  ('Wishlist', 2);

-- INSERT INTO "bookmarks_contain"
INSERT INTO "bookmarks_contain" ("id_room", "id_bookmarks") VALUES
  (1, 1),
  (2, 2);
