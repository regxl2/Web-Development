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
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
// now you can run CRUD operations like we use to do in mongodb
function insertUser(username, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.user.create({
            data: {
                email: username,
                firstName,
                lastName,
                password
            },
            select: {
                id: true
            }
        });
        // select is used for selecting what type of response we want from the client.
        console.log(res);
    });
}
insertUser("regxl1@gmail.com", "regxl1", "kumar", "helloworld");
