import {Client} from "pg";

const client = new Client({
    connectionString: "postgresql://rathourabhishekvk4:dtVhuG49DyPe@ep-withered-shadow-a1q0nrwe.ap-southeast-1.aws.neon.tech/postgresTest?sslmode=require"
})

async function getUserData(email: string){
    try{
        await client.connect();
        const selectUserQuery = `
        SELECT * FROM USERS WHERE email = $1;
    `
        const result = await client.query(selectUserQuery, [email]);
        if(result.rows.length>0){
            console.log("User found: ", result.rows[0]);
        }
        else{
            console.log("User not found with this email")
        }
    }
    catch(err){
        console.log("Something went wrong ", err)
    }
    finally {
        await client.end();
    }
}

getUserData('regxl@gmail.com')