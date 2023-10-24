import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assests/nav-img.png";

import "./navBar.css";

export default function NavBar() {
  const redirect = useNavigate();
  return (
    <div className="navBar">
      <div className="navImg">
        <img src={image} alt="" />
      </div>
      <div className="navButtons">
        <button
          className="homeButton"
          onClick={() => {
            redirect("/");
          }}
        >
          Home
        </button>

        <button
          className="loginButton"
          onClick={() => {
            redirect("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
