INSERT INTO "user"
(
    "first_name", 
    "last_name",
    "gender",
    "email",
    "phone_number", 
    "profil_url_img",
    "nationality",
    "birthdate",
    "password",
    "user_type"
)
VALUES ( $1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10 );