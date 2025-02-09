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
function getUserData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const selectUserQuery = `
        SELECT * FROM USERSS WHERE email = $1;
    `;
            const result = yield client.query(selectUserQuery, [email]);
            if (result.rows.length > 0) {
                console.log("User found: ", result.rows[0]);
            }
            else {
                console.log("User not found with this email");
            }
        }
        catch (err) {
            console.log("Something went wrong ", err);
        }
        finally {
            yield client.end();
        }
    });
}
getUserData('regxl@gmail.com');
