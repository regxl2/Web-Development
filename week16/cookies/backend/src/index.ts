import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const JWT_SECRET = "HareKrishna";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
	credentials: true,
	origin: "http://localhost:5173",
}));

app.post("/signup", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	// do validation
	const token = jwt.sign({email}, JWT_SECRET);
	res.cookie("token", token);
	res.send("Logged in successfully");
})

app.get("/user", (req, res) => {
	const token = req.cookies.token;
	const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
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

app.listen(3000, ()=>{
	console.log("app is listening to the port 3000")
});
