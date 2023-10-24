/** @format */

import React, { useState } from "react";
import Form from "../../components/sign up/Form";

import "./signUp.css";

import image from "../../assests/LoginArt.png";
export default function SignUp() {
	return (
		<div className="signUpPage">
			<div className="signUpDivs">
				<img src={image} alt="space-img" />
			</div>
			<div className="signUpDivs">
				<Form />
			</div>
		</div>
	);
}
