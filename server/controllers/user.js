/** @format */

//this helps in identifying which model we have to access
const User = require("../models/User");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const getAllUsers = async (req, res) => {
	try {
		// const email = "muskan@gmail.com";
		const users = await User.find({});
		const mappedUser = users.map((element) => {
			return {
				name: element.name,
				image: element.image,
				email: element.email,
			};
		});
		res.send(mappedUser);
	} catch (e) {
		console.log(e);
	}
};

const login = (req, res) => {
	res.send("all users ");
};

const register = async (req, res) => {
	// {
	//   name:"Muskan",
	//   image:"link",
	//   email:"example@gmail",
	//   password:"qwertyuiop",
	//   phone: "1234567890";
	//   dob: "12/12/12";
	// }

	try {
		// const { name, image, email, password, phone, dob } = req.body;
		const data = req.body;
		console.log(data);

		//hashing the password using bcrypt
		const hashedPassword = await bcrypt.hash(data.password, 10);

		//phone string to num
		const phoneNum = Number(data.phone);

		//dob string to date
		const dobDate = new Date(data.dob);

		const user = new User({
			name: data.name,
			email: data.email,
			image: data.image,
			password: hashedPassword,
			dob: dobDate,
			phone: phoneNum,
		});

		await user.save();

		console.log("user added");

		res.send({ msg: "user added", id: user._id });
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	getAllUsers,
	login,
	register,
};
