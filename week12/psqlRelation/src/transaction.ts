import {client} from './client';
import {User} from './data';
import {Address} from './data';

async function createUserWithAddress(user: User, address: Address){
	try{
		await client.connect();
		await client.query('BEGIN');

		const userQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id';
		const {username, email, password } = user;
		const userValues = [username, email, password];
		const userResult = await client.query(userQuery, userValues);
		if (userResult.rows.length === 0) {
			throw new Error("Failed to insert user");
		}
		const userId = userResult.rows[0].id;

		const addressQuery = 'INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1 , $2, $3, $4, $5)';
		const {city, country, street , pincode} = address;
		const addressValues =[userId, city, country, street, pincode];
		await client.query(addressQuery, addressValues);

		await client.query('COMMIT');

		console.log("User and Address inserted successfully.");
	}
	catch(err){
		await client.query('ROLLBACK');
		console.log(`Something went wrong, ${err}`);
	}
	finally {
		await client.end();
	}
}

const user: User = {
	username: "Lallu",
	email: "lallu@gmail.com",
	password: "lallu"
}

const address: Address = {
	city: "kanpur",
	country: "India",
	street: "IIT Kanpur",
	pincode: "208016"
}
createUserWithAddress(user, address);