/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./routes/user");
// const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTION");
	next();
});
// app.use(cors());

app.use(bodyParser.json());

app.use("/user", user);

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("conected to database");
		app.listen(process.env.PORT, () => {
			console.log("The server is started");
		});
	})
	.catch((err) => {
		console.log(err);
	});
