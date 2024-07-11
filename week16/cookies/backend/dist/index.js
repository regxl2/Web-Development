"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const JWT_SECRET = "HareKrishna";
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173",
}));
app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // do validation
    const token = jsonwebtoken_1.default.sign({ email }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged in successfully");
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    // get user information
    res.send({
        email: decoded.email
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", "");
    res.json({
        message: "Logged out successfully"
    });
});
app.listen(3000, () => {
    console.log("app is listening to the port 3000");
});
