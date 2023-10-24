/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Form.css";

export default function Form() {
	const [userData, setUserData] = useState({
		name: "",
		image: "",
		email: "",
		password: "",
		phone: "",
		dob: "",
	});
	const [rePass, setRePass] = useState("");
	const [error, setError] = useState(false);
	const [errorName, setErrorName] = useState("");

	const redirect = useNavigate();

	const signUp = async () => {
		console.log(userData);

		if (
			userData.name !== "" &&
			userData.image !== "" &&
			userData.email !== "" &&
			userData.password !== "" &&
			userData.phone !== "" &&
			userData.dob !== "" &&
			rePass != ""
		) {
			if (userData.password === rePass) {
				if (userData.password.length >= 8) {
					if (
						userData.email.includes("@") &&
						userData.email.includes(".") &&
						userData.email.lastIndexOf(".") !== userData.email.length - 1
					) {
						if (userData.phone.length === 10) {
							console.table(userData);
							setError(false);
							const response = await fetch(
								"http://localhost:5000/user/register",
								{
									method: "POST",
									body: JSON.stringify(userData),
									headers: {
										"Content-Type": "application/json",
									},
								}
							);
							console.log(response);
						} else {
							setErrorName("Please Enter A Valid Phone Number");
							setError(true);
						}
					} else {
						setErrorName("Please Enter A Valid Email Address");
						setError(true);
					}
				} else {
					setErrorName("Password Length Must be Minimum 8");
					setError(true);
				}
			} else {
				setErrorName("Password Do Not Matching");
				setError(true);
			}
		} else {
			setErrorName("Please Fill All The Fileds");
			setError(true);
		}
	};

	return (
		<div className="signUpForm">
			<div className="formHeading">
				<div className="formMainHeading">👋 Hey there, newbie</div>
				<div className="formSubHeading">
					Signup with us to learn and explore the Universe.
				</div>
			</div>
			<div className="form">
				<div className="inputSignUp">
					<label htmlFor="formName">Name</label>
					<input
						type="email"
						id="formName"
						value={userData.name}
						placeholder="Full Name"
						onChange={(e) => {
							setUserData({ ...userData, name: e.target.value });
						}}
					/>
				</div>
				<div className="inputSignUp">
					<label htmlFor="formImage">Upload Image</label>
					<input
						type="text"
						id="formImage"
						value={userData.image}
						placeholder="Image Link"
						onChange={(e) => {
							setUserData({ ...userData, image: e.target.value });
						}}
					/>
				</div>
				<div className="inputSignUp">
					<label htmlFor="formEmail">Email</label>
					<input
						type="email"
						id="formEmail"
						value={userData.email}
						placeholder="Eg: example@gmail.com"
						onChange={(e) => {
							setUserData({ ...userData, email: e.target.value });
						}}
					/>
				</div>
				<div className="inputSignUp">
					<label htmlFor="formPass">Enter Password</label>
					<input
						type="password"
						id="formPass"
						value={userData.password}
						placeholder="At least 8 characters"
						onChange={(e) => {
							setUserData({ ...userData, password: e.target.value });
						}}
					/>
				</div>
				<div className="inputSignUp">
					<label htmlFor="formRePass">Re-enter Password</label>
					<input
						type="password"
						id="formRePass"
						value={rePass}
						placeholder="At least 8 characters"
						onChange={(e) => {
							setRePass(e.target.value);
						}}
					/>
				</div>
				<div className="inputSignUp">
					<label htmlFor="formPhone">Phone</label>
					<input
						type="number"
						id="formPhone"
						value={userData.phone}
						placeholder="Eg: 1234567890"
						onChange={(e) => {
							setUserData({ ...userData, phone: e.target.value });
						}}
					/>
				</div>
				<div className="inputSignUp" id="date">
					<label htmlFor="formDOB">Birth Date</label>
					<input
						type="date"
						id="formDOB"
						value={userData.dob}
						onChange={(e) => {
							setUserData({ ...userData, dob: e.target.value });
						}}
					/>
				</div>
				{error && <div className="error">{errorName}</div>}
				<button className="signUp" onClick={signUp}>
					Sign Up{" "}
				</button>
			</div>
			<div className="existing">
				Already have an account?
				<span
					className="highlighted"
					onClick={() => {
						redirect("/login");
					}}>
					{" "}
					Sign in
				</span>
			</div>
			<div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
		</div>
	);
}
