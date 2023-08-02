import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

async function insert(){
    await prisma.userType.createMany({
        data: [
            { user_type: "Simple Customer" },
            { user_type: "Loyal Customer" },
            { user_type: "Receptionniste" },
            { user_type: "Admin" }
        ]
    });
}

insert();