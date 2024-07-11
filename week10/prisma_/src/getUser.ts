import {PrismaClient} from "@prisma/client";

const client = new PrismaClient();

async function getUser(email: string){
    const res = await client.user.findFirst({
        where: {
            email
        }
    })
    if(res){
        console.log(res);
    }
    else{
        console.log("User not found");
    }
}


getUser("regxl@gmail.com")