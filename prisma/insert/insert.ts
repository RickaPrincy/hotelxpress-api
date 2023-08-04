import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUserType() {
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
                    user_type: "Receptionniste"
                },
                {
                    user_type: "Loyal"
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

async function insertUser() {
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
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
                    profil_url_img: "http://localhost:5000/public/profile.jpg",
                    id_user_type: 4
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

async function insertRoomContent() {
    try {
        await prisma.roomContent.createMany({
            data: [
                {
                    content_name: "Bureau",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Wi-Fi",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Télévision",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Balcon",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Baignoire",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Climatisation",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Minibar",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Salle de bain",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Jacuzzi",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Kitchenette",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Ventilateur",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Cheminée",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Divan",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Coffre-fort",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                },
                {
                    content_name: "Mini-réfrigérateur",
                    content_url_img: "http://localhost:5000/public/content.jpg"
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}


async function insertRoomType() {
    try {
        await prisma.roomType.createMany({
            data: [
                {
                    type: "Standard "
                },
                {
                    type: "Deluxe"
                },
                {
                    type: "Familiale"
                },
                {
                    type: "Économique"
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

async function insertHotel() {
    try {
        await prisma.hotel.createMany({
            data: [
                {
                    hotel_name: "HotelFly",
                    address: "Lot AK25",
                    city: "Antananarivo",
                    state: "Madagascar",
                    phone_number: "0340011100"
                },
                {
                    hotel_name: "HotelBeach",
                    address: "Lot IB20",
                    city: "Majunga",
                    state: "Madagascar",
                    phone_number: "0340122211"
                },
                {
                    hotel_name: "HotelWind",
                    address: "Lot A20",
                    city: "Fianaratsoa",
                    state: "Madagascar",
                    phone_number: "0340122211"
                },
                {
                    hotel_name: "HotelCity",
                    address: "Lot B1",
                    city: "Paris",
                    state: "France",
                    phone_number: "0123456789"
                },
                {
                    hotel_name: "HotelSkyline",
                    address: "Lot B1",
                    city: "Marseille",
                    state: "France",
                    phone_number: "0922476789"
                },
                {
                    hotel_name: "HotelDream",
                    address: "Lot OK2",
                    city: "Lyon",
                    state: "France",
                    phone_number: "0823450789"
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

async function insertRoom() {
    try {
        await prisma.room.createMany({
            data: [
                {
                    room_name: "chambre A2",
                    id_room_type: 1,
                    id_hotel: 2,
                    room_category: "couple",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 32.05,
                    price_per_night: 50.09,
                    room_url_img: "http://localhost:5000/public/room.jpg"
                },
                {
                    room_name: "chambre A4",
                    id_room_type: 1,
                    id_hotel: 3,
                    room_category: "famille",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 200.15,
                    price_per_night: 350.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre A6",
                    id_room_type: 2,
                    id_hotel: 1,
                    room_category: "solo",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 92.00,
                    price_per_night: 150.00,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre B2",
                    id_room_type: 3,
                    id_hotel: 2,
                    room_category: "couple",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 65.01,
                    price_per_night: 90.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre B4",
                    id_room_type: 4,
                    id_hotel: 3,
                    room_category: "famille",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 102.05,
                    price_per_night: 250.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre B6",
                    id_room_type: 1,
                    id_hotel: 1,
                    room_category: "solo",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 72.05,
                    price_per_night: 110.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre C2",
                    id_room_type: 2,
                    id_hotel: 2,
                    room_category: "couple",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 92.05,
                    price_per_night: 150.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre C4",
                    id_room_type: 3,
                    id_hotel: 3,
                    room_category: "famille",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 132.05,
                    price_per_night: 250.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre C6",
                    id_room_type: 4,
                    id_hotel: 1,
                    room_category: "solo",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 22.05,
                    price_per_night: 50.00,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre A1",
                    id_room_type: 1,
                    id_hotel: 3,
                    room_category: "couple",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 100.05,
                    price_per_night: 120.09,
                    room_url_img: "http://localhost:5000/public/room.jpg",
                },
                {
                    room_name: "chambre A3",
                    id_room_type: 2,
                    id_hotel: 1,
                    room_category: "couple",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 62.05,
                    price_per_night: 90.09,
                    room_url_img: "http://localhost:5000/public/room.jpg"
                },
                {
                    room_name: "chambre B1",
                    id_room_type: 3,
                    id_hotel: 2,
                    room_category: "famille",
                    description: "Profitez d'une nuit de sommeil paisible dans un lit king-size avec une literie de luxe, vous garantissant une expérience de sommeil incomparable.",
                    price_per_hour: 132.05,
                    price_per_night: 250.09,
                    room_url_img: "http://localhost:5000/public/room.jpg"
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

async function insertGiveHotelFeedback() {
    try {
        await prisma.giveHotelFeedback.createMany({
            data: [
                {
                    id_hotel: 1,
                    id_user: 2,
                    text_body: "Comme c'est beau hotelxpress, j'ai beaucoup aimé la façon dont il mon dit que c'est beau",
                    note: 5
                },
                {
                    id_hotel: 2,
                    id_user: 3,
                    text_body: "Comme c'est beau hotelxpress, j'ai beaucoup aimé la façon dont il mon dit que c'est beau",
                    note: 10
                },
                {
                    id_hotel: 3,
                    id_user: 4,
                    text_body: "Comme c'est beau hotelxpress, j'ai beaucoup aimé la façon dont il mon dit que c'est beau",
                    note: 11
                },
                {
                    id_hotel: 1,
                    id_user: 3,
                    text_body: "Comme c'est beau hotelxpress, j'ai beaucoup aimé la façon dont il mon dit que c'est beau",
                    note: 11
                }
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

// insert room contain
type Connections = { id_room_content: number }[];
type RoomConnection = { id_room: number, id_room_contents: number[] }

function connectMany(roomConnection: RoomConnection): Connections {
    return roomConnection.id_room_contents.map(el => {
        return { id_room_content: el }
    });
}

export async function insertRoomContain(list: RoomConnection) {
    try {
        await prisma.room.update({
            data: {
                room_contents: {
                    connect: connectMany(list)
                }
            },
            where: {
                id_room: list.id_room
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}

async function insertManyRoomContain() {
    const lists: RoomConnection[] = [
        { id_room: 1, id_room_contents: [1, 5, 4, 2] },
        { id_room: 3, id_room_contents: [1, 5, 7, 2] },
        { id_room: 4, id_room_contents: [5, 3, 2, 1] },
        { id_room: 5, id_room_contents: [6, 3, 2, 1] }
    ];

    for (const list of lists) {
        await insertRoomContain(list);
    }
}

//-------------------------------------------------------

async function launchAllInsert() {
    await insertUserType();
    await insertUser();
    await insertRoomContent();
    await insertRoomType();
    await insertHotel();
    await insertRoom();
    await insertGiveHotelFeedback();
    await insertManyRoomContain();
}

launchAllInsert();