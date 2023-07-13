ALTER TABLE "boobamrks" 
RENAME "bookmark";

ALTER TABLE "bookmark" 
RENAME COLUMN "bookmarks_id" TO "bookmark_id";

ALTER TABLE "bookmark" 
RENAME COLUMN "bookmarks_name" TO "bookmark_name";

CREATE TABLE "bookmark_contain" (
    "id_bookmark_contain" SERIAL PRIMARY KEY,
    "id_bookmark" INT REFERENCES "bookmark"("id_bookmark") NOT NULL,
    "id_room" INT REFERENCES "room"("id_room") NOT NULL,
);

ALTER TABLE "paiement" 
RENAME "payment";

ALTER TABLE "payment" 
RENAME COLUMN "id_paiement" TO "id_payment";

ALTER TABLE "payment" 
RENAME COLUMN "date_paiment" TO "date_payment";

ALTER TABLE "payment" 
RENAME COLUMN "method_paiment" TO "method_paiement";