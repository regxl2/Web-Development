import {prisma} from './client'

async function getUserData(id: number){
	try{
		await prisma.$connect();
		const user = await prisma.user.findUnique({
			where: {id: id}
		})
		if(user!=null){
			console.log(`User found successfully. ${JSON.stringify(user)}`);
		}
		else{
			console.log("User doesn't exist.")
		}
	}
	catch(err){
		console.log("Something went wrong getting user data");
	}
	finally {
		await prisma.$disconnect();
	}
}

getUserData(1);
