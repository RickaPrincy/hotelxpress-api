import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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

insertGiveHotelFeedback();