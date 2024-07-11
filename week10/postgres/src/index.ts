import {Client} from "pg";

const client = new Client({
    connectionString: "postgresql://rathourabhishekvk4:dtVhuG49DyPe@ep-withered-shadow-a1q0nrwe.ap-southeast-1.aws.neon.tech/postgresTest?sslmode=require"
})

async function createUsersTable(){
    await client.connect();
    const createUsersQuery = `
        CREATE TABLE USERSS(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
    const result = await client.query(createUsersQuery);
    console.log(result);
}

createUsersTable();
