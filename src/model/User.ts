export type User = {
    id_user: string,
    first_name: string,
    last_name?: string,
    gender?: "M" | "F",
    email: string,
    phone_number: string,
    profil_url_img?: string,
    nationality?: string,
    birthdate?: string,
    password: string,
    user_type: number
}

