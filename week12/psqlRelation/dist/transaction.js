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
function createUserWithAddress(user, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client_1.client.connect();
            yield client_1.client.query('BEGIN');
            const userQuery = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id';
            const { username, email, password } = user;
            const userValues = [username, email, password];
            const userResult = yield client_1.client.query(userQuery, userValues);
            if (userResult.rows.length === 0) {
                throw new Error("Failed to insert user");
            }
            const userId = userResult.rows[0].id;
            const addressQuery = 'INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1 , $2, $3, $4, $5)';
            const { city, country, street, pincode } = address;
            const addressValues = [userId, city, country, street, pincode];
            yield client_1.client.query(addressQuery, addressValues);
            yield client_1.client.query('COMMIT');
            console.log("User and Address inserted successfully.");
        }
        catch (err) {
            yield client_1.client.query('ROLLBACK');
            console.log(`Something went wrong, ${err}`);
        }
        finally {
            yield client_1.client.end();
        }
    });
}
const user = {
    username: "Lallu",
    email: "lallu@gmail.com",
    password: "lallu"
};
const address = {
    city: "kanpur",
    country: "India",
    street: "IIT Kanpur",
    pincode: "208016"
};
createUserWithAddress(user, address);
