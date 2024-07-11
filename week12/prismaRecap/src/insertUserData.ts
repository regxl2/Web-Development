import { prisma } from './client';
import { User } from './data';

async function insertUserData(user: User) {
	try {
		await prisma.$connect();
		const response = await prisma.user.create({
			data: user
		});
		console.log(`User data inserted successfully.${JSON.stringify(response)}`);
	} catch (err) {
		console.log(`Something went wrong ${err}`);
	} finally {
		await prisma.$disconnect();
	}
}

const user: User = {
	username: 'abhi',
	password: 'abhi',
	firstName: 'Abhi',
	lastName: 'Kumar',
	email: 'abhi@gmail.com'
};

insertUserData(user);