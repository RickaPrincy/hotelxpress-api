import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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

insertManyRoomContain();