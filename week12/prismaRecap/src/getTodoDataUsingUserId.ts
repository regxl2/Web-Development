import {prisma} from './client';

async function getTodoDataUsingUserId(userId: number) {
	try{
		await prisma.$connect();
		const todos = await prisma.todo.findMany({
			where:{
				userId
			}
		});
		if(todos.length==0){
			console.log("No todos found.");
		}
		else{
			console.log(`Todos: ${JSON.stringify(todos)}`)
		}
	}
	catch(err){
		console.log("Something went wrong getting todo data");
	}
	finally {
		await prisma.$disconnect();
	}
}

getTodoDataUsingUserId(1);