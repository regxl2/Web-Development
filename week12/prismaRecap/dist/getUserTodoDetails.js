"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
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
function getUserTodoDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client_1.prisma.$connect();
            const response = yield client_1.prisma.todo.findMany({
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
            if (response == null) {
                console.log("User not found");
            }
            console.log(`User and todos retrieves successfully: \n ${JSON.stringify(response)}`);
        }
        catch (err) {
            console.log("Something went wrong in retrieving the user and todos details");
        }
        finally {
            yield client_1.prisma.$disconnect();
        }
    });
}
getUserTodoDetails(1);
