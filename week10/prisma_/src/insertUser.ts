import {PrismaClient} from '@prisma/client'

const client = new PrismaClient();

// now you can run CRUD operations like we use to do in mongodb

async function insertUser(username: string, firstName: string, lastName: string, password: string){
    const res = await client.user.create({
        data: {
            email: username,
            firstName,
            lastName,
            password
        },
        select:{
            id: true
        }
    })
    // select is used for selecting what type of response we want from the client.
    console.log(res);
}

insertUser("regxl1@gmail.com", "regxl1", "kumar", "helloworld")
