import {PrismaClient} from "@prisma/client";

const client = new PrismaClient();


interface User{
    firstName: string,
    lastName: string
}

async function updateUser(email: string, user: User){
    const res = await client.user.update({
        where: {
            email
        },
        data: {
            firstName: user.firstName,
            lastName: user.lastName
        }
    })
    console.log(res)
}

updateUser("regxl1@gmail.com", {firstName: "aahan", lastName: "kumar"})