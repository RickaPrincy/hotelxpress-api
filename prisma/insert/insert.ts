import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function insertUserType(){
    try {
        await prisma.userType.createMany({
            data: [
                { 
                    user_type: "Customer",
                },
                { 
                    user_type: "Admin" 
                },
                {
                    user_type: "receptionniste"
                },
                {
                    user_type: "Loyal"
                }
            ]
        })
    } catch (error) {
        
    }
}


async function insertUser(){
    try {
        await prisma.user.createMany({
            data: [
                { 
                    email: "John2@gmail.com",
                    first_name: "John2",
                    password: "1234",
                    phone_number: "0340550011",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Doe",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 1
                },
                {
                    email: "Bob@gmail.com",
                    first_name: "Bob",
                    password: "1234",
                    phone_number: "0340650098",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Joe",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 2
                },
                {
                    email: "alice.johnson@example.com",
                    first_name: "Alice",
                    password: "1234",
                    phone_number: "0341650095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Johnson",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 3
                },
                {
                    email: "michael.smith@emailprovider.com",
                    first_name: "Michael",
                    password: "1234",
                    phone_number: "0340100095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Smith",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 1
                },
                {
                    email: "emma.williams@example.org",
                    first_name: "Emma",
                    password: "1234",
                    phone_number: "0340050095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "F",
                    last_name: "Williams",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 2
                },
                {
                    email: "sophia.lee@example.com",
                    first_name: "Sophia",
                    password: "1234",
                    phone_number: "0340350095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "F",
                    last_name: "Lee",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 3
                },
                {
                    email: "william.taylor@emailprovider.com",
                    first_name: "William",
                    password: "1234",
                    phone_number: "0340450095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Taylor",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 1
                },
                {
                    email: "olivia.martinez@example.org",
                    first_name: "Olivia",
                    password: "1234",
                    phone_number: "0340550095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "F",
                    last_name: "Martinez",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 2
                },
                {
                    email: "ethan.anderson@emailprovider.net",
                    first_name: "Ethan",
                    password: "1234",
                    phone_number: "0340650095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Anderson",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 3
                },
                {
                    email: "benjamin.rodriguez@example.org",
                    first_name: "Benjamin",
                    password: "1234",
                    phone_number: "0340750095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "M",
                    last_name: "Rodriguez",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 4
                },
                {
                    email: "ava.davis@example.com",
                    first_name: "Ava",
                    password: "1234",
                    phone_number: "0340850095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "F",
                    last_name: "Davis",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 4
                },
                {
                    email: "chloe.wilson@emailprovider.net",
                    first_name: "Chloe",
                    password: "1234",
                    phone_number: "0340950095",
                    birthdate: "2011-10-05T14:48:00.000Z",
                    gender: "F",
                    last_name: "Wilson",
                    nationality: "Mada",
                    profil_url_img:"http://localhost:5000/public/profile.jpg",
                    id_user_type: 4
                }
            ]
        })
    } catch (error) {
        
    }
}

async function insertRoomContent(){
    try {
        await prisma.roomContent.createMany({
            data: [
                { 
                    content_name: "Bureau et chaise",
                    content_url_img: ""
                },
                { 
                    content_name: "Wi-Fi gratuit",
                    content_url_img: ""
                },
                {
                    content_name: "Télévision à écran plat",
                    content_url_img: ""
                },
                {
                    content_name: "Balcon privé avec vue panoramique",
                    content_url_img: ""
                },
                { 
                    content_name: "Grande télévision intelligente avec chaînes premium",
                    content_url_img: ""
                },
                { 
                    content_name: "Coin salon avec canapé et table basse",
                    content_url_img: ""
                },
                { 
                    content_name: "Accès gratuit au club pour enfants",
                    content_url_img: ""
                },
                { 
                    content_name: "Salle de bain privée avec baignoire",
                    content_url_img: ""
                },
                { 
                    content_name: "Ventilateur de plafond",
                    content_url_img: ""
                }
            ]
        })
    } catch (error) {
        
    }
}
async function insertRoomType(){
    try {
        await prisma.roomType.createMany({
            data: [
                { 
                    type: "Chambre Standard "
                },
                { 
                    type: "Suite Deluxe" 
                },
                {
                    type: "Chambre Familiale"
                },
                {
                    type: "Chambre Économique"
                }
            ]
        })
    } catch (error) {
        
    }
}
async function insertRoom(){
    try {
        await prisma.room.createMany({
            data: [
                { 
                    room_name: "",
                    id_room_type: 1,
                    id_hotel: 2, 
                    room_category: "",
                    description: "",
                    price_per_hour: "",
                    price_per_night: "",
                    room_url_img: "",
                },
            ]
        })
    } catch (error) {
        
    }
}