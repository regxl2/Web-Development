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
function insertData(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, email, password }) {
        try {
            yield client_1.client.connect();
            const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
            const values = [username, email, password];
            const result = yield client_1.client.query(query, values);
            console.log(result);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            yield client_1.client.end();
        }
    });
}
insertData({ username: 'abhi', email: 'abhi@gmail.com', password: 'abhi' });
