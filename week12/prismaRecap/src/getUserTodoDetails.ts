import { prisma } from './client';

// This below method is not an efficient way to retrieve the user and todos data.
// Because it requires two queries to fetch the data of user and todos.

// async function getUserTodoDetails(userId: number) {
// 	try {
// 		await prisma.$connect();
// 		const user = await prisma.user.findFirst({
// 			where: {
// 				id: userId
// 			}
// 		});
// 		const todos = await prisma.todo.findMany({
// 			where: {
// 				userId
// 			}
// 		});
// 		if (user == null) {
// 			console.log('No such user found.');
// 		} else if (todos.length == 0) {
// 			console.log('This user has no todos.');
// 		} else {
// 			console.log(`user: ${JSON.stringify(user)}`);
// 			console.log(`todos: ${JSON.stringify(todos)}`);
// 		}
// 	} catch (err) {
// 		console.log('Something went wrong getting data');
// 	} finally {
// 		await prisma.$disconnect();
// 	}
// }


// In this method, you can retrieve the user and todos in one query.
async function getUserTodoDetails(userId: number) {
	try {
		await prisma.$connect();
		const response = await prisma.todo.findMany({
			where: {
				userId
			},
			select: {
				title: true,
				description: true,
				done: true,
				user: {
					select: {
						username: true,
						email: true,
						firstName: true,
						lastName: true
					}
				}
			}
		});
		if(response==null){
			console.log("User not found");
		}
		console.log(`User and todos retrieves successfully: \n ${JSON.stringify(response)}`);
	}
	catch(err){
		console.log("Something went wrong in retrieving the user and todos details")
	}
	finally {
		await prisma.$disconnect();
	}
}

getUserTodoDetails(1);