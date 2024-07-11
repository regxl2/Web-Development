import {client} from './client';
import {User} from './data';

async function insertData({ username, email, password }: User) {
	try {
		await client.connect();
		const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
		const values = [username, email, password];
		const result = await client.query(query, values);
		console.log(result);
	} catch (err) {
		console.error(err);
	} finally {
		await client.end();
	}
}

insertData({ username: 'abhi', email: 'abhi@gmail.com', password: 'abhi' });