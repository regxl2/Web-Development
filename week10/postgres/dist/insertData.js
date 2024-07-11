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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://rathourabhishekvk4:dtVhuG49DyPe@ep-withered-shadow-a1q0nrwe.ap-southeast-1.aws.neon.tech/postgresTest?sslmode=require"
});
function insertIntoUsersTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertUserQuery = `INSERT INTO USERSS(username, email, password) VALUES ($1, $2, $3);`;
            const values = [username, email, password];
            const result = yield client.query(insertUserQuery, values);
            console.log("Insertion Success", result);
        }
        catch (err) {
            console.error("Something went wrong during insertion", err);
        }
        finally {
            yield client.end();
        }
    });
}
insertIntoUsersTable('aahana', 'aahan@gmail.com', 'helloworld');
