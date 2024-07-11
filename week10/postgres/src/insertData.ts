import {Client} from "pg";

const client = new Client({
    connectionString: "postgresql://rathourabhishekvk4:dtVhuG49DyPe@ep-withered-shadow-a1q0nrwe.ap-southeast-1.aws.neon.tech/postgresTest?sslmode=require"
})

// This is an insecure way to store data in your tables.When you expose this functionality eventually via HTTP,
// someone can do an SQL INJECTION to get access to your data/delete your data.
// for example, You are taking username and password as an input from the user, but in the place of the username,
// he can pass a string like "; delete from user where id=1;". So, without checking the input from the user, it could
// delete the user from the database. Starting ; will mark the end of before query and then execute the delete query.

// async function insertIntoUsersTable(username: String, email: string, password: string){
//     try{
//         await client.connect();
//         const insertUserQuery = `
//         INSERT INTO USERS (username, email, password) VALUES('${username}', '${email}', '${password}');
//     `;
//         const result = await client.query(insertUserQuery);
//         console.log("Insertion Success", result);
//     }
//     catch (err){
//         console.error("Something went wrong during insertion", err);
//     }
//     finally {
//         await client.end();
//     }
// }



async function insertIntoUsersTable(username: string, email: string, password: string){
    try{
        await client.connect();
        //It's an INSERT query that inserts data into the users table without returning any additional information.
        const insertUserQuery = `INSERT INTO USERS(username, email, password) VALUES ($1, $2, $3);`;
        //It's an INSERT query that inserts data into the users table and returns all columns of the newly inserted row.
        // const insertUserQuery = `INSERT INTO USERSS(username, email, password) VALUES ($1, $2, $3) RETURNING *`;

        const values = [username, email, password];
        // using parameterized values to prevent the SQL injection
        const result = await client.query(insertUserQuery, values);
        console.log("Insertion Success", result);
    }
    catch(err){
        console.error("Something went wrong during insertion", err);
    }
    finally {
        await client.end();
    }
}


insertIntoUsersTable('aahana', 'aahan@gmail.com', 'helloworld');
