SELECT
    "id_user",
    "first_name",
    "last_name",
    "gender",
    "email",
    "phone_number",
    "profil_url_img",
    "nationality",
    "birthdate",
    "user_type"
FROM
    "user"
WHERE
    "id_user" = $1;