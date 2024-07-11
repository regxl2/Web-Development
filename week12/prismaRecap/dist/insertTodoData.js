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
function insertTodoData(todo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client_1.prisma.$connect();
            const response = yield client_1.prisma.todo.create({
                data: todo
            });
            console.log(`Task is inserted Successfully, ${JSON.stringify(response)}`);
        }
        catch (err) {
            console.log("Something went wrong getting user data");
        }
        finally {
            yield client_1.prisma.$disconnect();
        }
    });
}
const todo = {
    title: "learn web dev",
    description: "learn web dev upto 6pm",
    userId: 1
};
insertTodoData(todo);
