ALTER TABLE "reservation"
ADD COLUMN "is_annulled" BOOLEAN DEFAULT FALSE NOT NULL;

ALTER TABLE "reservation"
ADD CONSTRAINT "check_arrival_date" CHECK ("arrival" > current_date);