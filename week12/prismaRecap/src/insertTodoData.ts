import {prisma} from './client';
import {Todo} from './data';

async function insertTodoData(todo: Todo) {
	try{
		await prisma.$connect();
		const response = await prisma.todo.create({
			data: todo
		});
		console.log(`Task is inserted Successfully, ${JSON.stringify(response)}`);
	}
	catch(err){
		console.log("Something went wrong getting user data");
	}
	finally {
		await prisma.$disconnect();
	}
}

const todo: Todo = {
	title: "learn web dev",
	description: "learn web dev upto 6pm",
	userId: 1
}

insertTodoData(todo);